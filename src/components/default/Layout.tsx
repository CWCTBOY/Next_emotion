import React from "react";
import Link from "next/link";
import { Anchor, NavContent, NavWrapper, Netflix, Wrapper } from "../../../styles/Layout";

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <NavWrapper>
        <NavContent>
          <Link href={'/'}>
            <Anchor><Netflix src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" /></Anchor>
          </Link>
          <Link href={'/about'}>
            <Anchor>ABOUT</Anchor>
          </Link>
        </NavContent>
      </NavWrapper>
      {children}
    </Wrapper>
  )
}
export default Layout;