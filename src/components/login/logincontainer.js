import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg, success } from "../../commons/modalFunc";
import LoginPresenter from "./loginpresenter";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/todo");
  }, [navigate]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (email.includes("@") && password.length > 6) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  const onClickLogin = async () => {
    try {
      const result = await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signin",
        {
          email,
          password,
        }
      );
      success("로그인에 성공하였습니다");
      localStorage.setItem("accessToken", result.data.access_token);
      navigate("/todo");
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  return (
    <LoginPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      change={change}
    />
  );
};

export default LoginContainer;
