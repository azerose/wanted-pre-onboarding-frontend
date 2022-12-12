import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 60px 102px;
  margin: 100px auto;
  box-shadow: 0px 0px 10px gray;
  border: none;
  position: relative;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #000000;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
  font-size: 18px;
  font-weight: 500;
  div {
    width: 20%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 40px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 0 0 20px 20px;
  font-size: 12px;
`;

export const TodoInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;

export const BtnStyle = styled.button`
  color: white;
  background-color: red;
  height: 50px;
  width: 150px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const Column = styled.div`
  width: 50%;
  font-size: 16px;
  height: 150px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  cursor: pointer;
`;
