import { useState } from "react";
import LoginPresenter from "./loginpresenter";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <LoginPresenter />;
};

export default LoginContainer;
