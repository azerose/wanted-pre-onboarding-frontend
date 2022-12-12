import { useEffect } from "react";
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
          {props.list.data?.map((el) => (
            <S.Row key={el.id}>
              <S.Column>{el.todo}</S.Column>
              <S.Column>
                <label>{!el.isCompleted ? "미완료" : "완료"}</label>
                <button id={el.id} onClick={props.onClickComplete}>
                  {!el.isCompleted ? "완료하기" : "되돌리기"}
                </button>
              </S.Column>
              <S.Column>
                <button id={el.id} onClick={props.onClickUpdate}>
                  수정하기
                </button>
              </S.Column>
              <S.Column>
                <button id={el.id} onClick={props.onClickDelete}>
                  삭제하기
                </button>
              </S.Column>
            </S.Row>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default TodoPresenter;
