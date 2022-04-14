import styled from "@emotion/styled";
export const Wrapper = styled('div')`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.95);
	color: whitesmoke;
  display: flex;
  flex-direction: column;
`
export const NavWrapper = styled('nav')`
  width: 100%;
  height: 70px;
  background-color: black;
  background: linear-gradient(to right, red, purple);
  padding: 0 0 3px 0;
  position: relative;
`
export const NavContent = styled('div')`
  background-color: black;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const Anchor = styled('a')`
  width: auto;
  height: auto;
  font-size: 15px;
  cursor: pointer;
  &:first-of-type {
    color: red;
    font-size: 28px;
  }
`