import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg } from "../modalFunc";

export default function useAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      errorMsg("로그인 후 이용가능합니다");
      void navigate("/");
    } else {
      void navigate("/todo");
    }
  }, [navigate]);
}
