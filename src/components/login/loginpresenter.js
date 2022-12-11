import * as S from "./loginsytle";

const LoginPresenter = (props) => {
  return (
    <>
      <div>
        <S.EmailSection>
          <S.EmailImg src="/id.png/" />
          <S.EmailInput type="text" onChange={props.onChangeEmail} />
        </S.EmailSection>
        <S.PassWordSection>
          <S.EmailImg src="/password.png/" />
          <S.EmailInput type="password" onChange={props.onChangePassword} />
        </S.PassWordSection>
      </div>
    </>
  );
};

export default LoginPresenter;
