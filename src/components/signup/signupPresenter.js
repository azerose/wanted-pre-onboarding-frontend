import * as S from "./signupStyle";

const SignupPresenter = (props) => {
  return (
    <>
      <S.MainSectionWrapper>
        <div>회원가입</div>
        <S.InputWrapper>
          <S.LabelStyle>이메일</S.LabelStyle>
          <S.InputBox>
            <S.InputStyle type="text" onChange={props.onChangeEmail} />
          </S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelStyle>비밀번호</S.LabelStyle>
          <S.InputBox>
            <S.InputStyle type="password" onChange={props.onChangePassword} />
          </S.InputBox>
        </S.InputWrapper>
        <S.FooterWrapper>
          {props.change ? (
            <S.SignUpBtn change={props.change} onClick={props.onClickSignUp}>
              제출
            </S.SignUpBtn>
          ) : (
            <S.SignUpBtn disabled>제출</S.SignUpBtn>
          )}
        </S.FooterWrapper>
      </S.MainSectionWrapper>
    </>
  );
};

export default SignupPresenter;
