import styled from "@emotion/styled";

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
