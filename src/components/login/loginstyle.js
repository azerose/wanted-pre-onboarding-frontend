import styled from "@emotion/styled";

export const EmailSection = styled.section`
  display: flex;
  align-items: center;
  margin: 5px 0 0 0;
  border: 2px solid #c6c6c6;
  padding: 5px 0;
  border-radius: 5px 5px 0 0;
`;

export const PassWordSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border: 2px solid #c6c6c6;
  border-top: none;
  padding: 5px 0;
  border-radius: 0 0 5px 5px;
`;

export const EmailInput = styled.input`
  width: 100%;
  margin-right: 10px;
  height: 50px;
  border: none;
  outline: none;
  &:focus {
    outline: 1px solid #f19e18;
    border-radius: 5px;
  }
`;

export const LoginBtnSection = styled.section`
  margin: 20px 0;
`;

export const LoginBtn = styled.button`
  background: ${({ change }) => (change ? "red" : "gray")};
  :disabled {
    ${(change) => !change}
  }
  width: 100%;
  padding: 13px 0;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  border: 2px solid #c6c6c6;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;
