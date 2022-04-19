import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
export const Popular = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
export const PopulatTxt = styled('span')`
font-size: 30px;
margin: 0 50px 0 50px;
`
export const CardBox = styled('div')`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: scroll;
  ::-webkit-scrollbar { 
    display: none; 
}
`
const animation = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-2800px);
  }
`
export const Poster = styled('img')`
  height: 85%;
  margin: 0 20px 0 20px;
  border-radius: 10px;
  animation: ${animation} 25s infinite;
`