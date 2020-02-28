import * as React from "react";
import styled from "styled-components";

interface Props {
  checked: boolean;
  id: string;
}

export const Checkbox: React.FC<Props> = ({ checked, id }) => {
  return (
    <>
      <Label></Label>
      <CheckboxItem></CheckboxItem>
    </>
  );
};

const Label = styled.label``;

const CheckboxItem = styled.input``;
