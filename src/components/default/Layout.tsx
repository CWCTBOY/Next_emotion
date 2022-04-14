import React from "react";
import Link from "next/link";
import { Anchor, NavContent, NavWrapper, Wrapper } from "../../../styles/Layout";

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <NavWrapper>
        <NavContent>
          <Link href={'/'}>
            <Anchor>NETFLEX</Anchor>
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