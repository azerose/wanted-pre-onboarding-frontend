import * as S from "./todoliststyle";

const TodoListPresenter = (props) => {
  const el = props.el;
  const isEdit = props.isEdit;
  return (
    <>
      <S.Row key={el.id}>
        <S.Column>{el.todo}</S.Column>
        <S.Column>
          <label>{!el.isCompleted ? "미완료" : "완료"}</label>
          <button id={el.id} onClick={props.onClickComplete}>
            {!el.isCompleted ? "완료하기" : "되돌리기"}
          </button>
        </S.Column>
        {isEdit ? (
          <S.Column>
            <input onChange={props.onChangeUpdate} />
            <button id={el.id} onClick={props.onClickUpdateConfirm}>
              제출
            </button>
            <button id={el.id} onClick={props.onClickUpdateCancel}>
              취소
            </button>
          </S.Column>
        ) : (
          <S.Column>
            <button id={el.id} onClick={props.onClickUpdate}>
              수정하기
            </button>
          </S.Column>
        )}

        <S.Column>
          <button id={el.id} onClick={props.onClickDelete}>
            삭제하기
          </button>
        </S.Column>
      </S.Row>
    </>
  );
};
export default TodoListPresenter;
