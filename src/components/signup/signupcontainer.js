import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg } from "../../commons/modalFunc";
import SignupPresenter from "./signupPresenter";

const SignupContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = () => {
    if (!email.includes("@")) {
      errorMsg("이메일에는 @가 들어가야합니다");
      return;
    }
    if (password.length < 8) {
      errorMsg("비밀번호는 8글자 이상입니다");
      return;
    }
    navigate("/");
  };

  return (
    <SignupPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
    />
  );
};

export default SignupContainer;
