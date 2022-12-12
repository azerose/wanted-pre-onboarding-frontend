import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorMsg } from "../../commons/modalFunc";
import TodoPresenter from "./todoPresenter";

const TodoConatainer = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([{}]);
  const access_token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickCreateTodo = async () => {
    try {
      await axios.request({
        url: "https://pre-onboarding-selection-task.shop/todos",
        method: "post",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        data: {
          todo: todo,
        },
      });
      await fetchData();
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  const fetchData = async () => {
    const data = await axios.request({
      url: "https://pre-onboarding-selection-task.shop/todos",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
    setList(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
      return;
    }
    axios
      .request({
        url: "https://pre-onboarding-selection-task.shop/todos",
        method: "get",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        errorMsg(err);
      });
  }, [access_token, navigate]);

  console.log(list);

  return (
    <TodoPresenter
      list={list}
      fetchData={fetchData}
      onChangeTodo={onChangeTodo}
      onClickCreateTodo={onClickCreateTodo}
    />
  );
};

export default TodoConatainer;
