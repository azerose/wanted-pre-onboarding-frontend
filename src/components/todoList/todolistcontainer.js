import axios from "axios";
import { useState } from "react";
import TodoListPresenter from "./todolistpresenter";

const TodoListConatainer = (props) => {
  const [updateData, setUpdateData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const access_token = localStorage.getItem("accessToken");
  const fetchData = props.fetchData;
  const list = props.list;

  const onChangeUpdate = (event) => {
    setUpdateData(event.target.value);
  };

  const onClickComplete = async (event) => {
    let todo = null;
    list.data.forEach((el) => {
      if (String(el.id) === String(event.target.id)) {
        todo = el.todo;
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
  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickUpdateCancel = () => {
    setIsEdit(false);
  };

  const onClickUpdateConfirm = async (event) => {
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
        todo: updateData,
        isCompleted: state,
      },
    });
    await fetchData();
    setIsEdit((prev) => !prev);
  };

  return (
    <TodoListPresenter
      el={props.el}
      isEdit={isEdit}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickUpdateConfirm={onClickUpdateConfirm}
      onClickUpdateCancel={onClickUpdateCancel}
      onChangeUpdate={onChangeUpdate}
    />
  );
};
export default TodoListConatainer;
