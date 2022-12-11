import styled from "@emotion/styled";

export const MainSectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const LabelStyle = styled.label`
  font-size: 14px;
  font-weight: bold;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 460px;
  border: 1px solid #c6c6c6;
  height: 50px;
  border-radius: 5px;
  margin: 15px 0;
`;

export const InputStyle = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  padding: 60px 0;
`;

export const SignUpBtn = styled.button`
  width: 460px;
  height: 50px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;
`;
