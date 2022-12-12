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

  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickComplete = async (event) => {
    let todo = null;
    list.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        todo = el.todo;
      }
    });
    console.log(event.target.innerText);
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        todo,
        isCompleted: event.target.innerText === "완료하기" ? true : false,
      },
    });
    await fetchData();
  };

  const onClickDelete = async (event) => {
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    await fetchData();
  };

  const onClickUpdate = async (event) => {
    let todo = prompt("할일을 입력하세요");
    let state = null;
    list.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        state = el.isCompleted;
      }
    });
    await axios.request({
      url: `https://pre-onboarding-selection-task.shop/todos/${event.target.id}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        todo,
        isCompleted: state,
      },
    });
    await fetchData();
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

  return (
    <TodoPresenter
      list={list}
      onChangeTodo={onChangeTodo}
      onClickCreateTodo={onClickCreateTodo}
      onClickComplete={onClickComplete}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
};

export default TodoConatainer;
