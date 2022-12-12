import * as S from "./loginstyle";
import { Link } from "react-router-dom";

const LoginPresenter = (props) => {
  return (
    <>
      <S.MainWrapper>
        <S.EmailSection>
          <S.EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={props.onChangeEmail}
          />
        </S.EmailSection>
        <S.PassWordSection>
          <S.EmailInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
        </S.PassWordSection>
        <S.LoginBtnSection>
          <S.LoginBtn onClick={props.onClickLogin}>로그인</S.LoginBtn>
        </S.LoginBtnSection>
        <S.LoginBtnSection>
          <Link to="/signup">
            <S.LoginBtn>회원가입</S.LoginBtn>
          </Link>
        </S.LoginBtnSection>
      </S.MainWrapper>
    </>
  );
};

export default LoginPresenter;
