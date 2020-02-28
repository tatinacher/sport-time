import * as React from "react";
import styled from "styled-components";

export const Book: React.FC<{ toDoList: any }> = ({ toDoList }) => {
  return <Cover></Cover>;
};

export const Cover = styled.div`
  border: 2px solid #111;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  height: inherit;
`;

export const Page = styled.div`
  display: flex;
`;
