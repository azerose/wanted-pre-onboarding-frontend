import { useEffect } from "react";
import TodoListConatainer from "../todoList/todolistcontainer";
import * as S from "./todostyle";

const TodoPresenter = (props) => {
  useEffect(() => {
    if (!props.list) return;
  }, [props.list]);

  return (
    <>
      <S.Wrapper>
        <div>오늘 할 일</div>
        <S.InputWrapper>
          <S.TodoInput onChange={props.onChangeTodo} />
          <S.BtnStyle onClick={props.onClickCreateTodo}>추가</S.BtnStyle>
        </S.InputWrapper>
        <S.ListTitle>
          <div>할일</div>
          <div>완료 여부</div>
          <div>수정</div>
          <div>삭제</div>
        </S.ListTitle>
        <S.ListWrapper>
          {props.list.data?.map((el) => {
            return (
              <TodoListConatainer
                key={el.id}
                el={el}
                list={props.list}
                fetchData={props.fetchData}
              />
            );
          })}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default TodoPresenter;
