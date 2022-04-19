import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import globalStyle from "../../styles/GlobaStyle";
import Layout from "../components/default/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={css`${globalStyle}`} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}