import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Border = styled('div')`//similar but different with styledComponent in TS
  width: 100vw;
  height: 100vh;
  border: 10px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled('div')`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  transition: background-color 1s ease;
  &:hover {
    background-color: rgba(0,0,0,0.3);
  }
`;
export const Text = styled('h1')`
  font-size: 30px;
  color: black;
`;
