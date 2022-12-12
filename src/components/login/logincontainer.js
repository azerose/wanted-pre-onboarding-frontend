import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg, success } from "../../commons/modalFunc";
import LoginPresenter from "./loginpresenter";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  if (localStorage.getItem("accessToken")) navigate("/todo");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
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
    />
  );
};

export default LoginContainer;
