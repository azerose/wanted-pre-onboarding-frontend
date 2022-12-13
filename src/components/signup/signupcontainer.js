import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg, success } from "../../commons/modalFunc";
import SignupPresenter from "./signupPresenter";

const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (email.includes("@") && password.length > 6) {
      setChange(true);
    }
  };

  const onClickSignUp = async () => {
    if (!email.includes("@")) {
      errorMsg("이메일에는 @가 들어가야합니다");
      return;
    }
    if (password.length < 8) {
      errorMsg("비밀번호는 8글자 이상입니다");
      return;
    }
    try {
      await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signup",
        {
          email,
          password,
        }
      );
      success("회원가입에 성공하였습니다");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  return (
    <SignupPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
      change={change}
    />
  );
};

export default SignupContainer;
