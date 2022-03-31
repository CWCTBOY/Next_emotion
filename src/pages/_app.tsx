import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../../styles/Reset";
import { Global, css } from "@emotion/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global styles={css`
        ${reset}
      `} />
      <Component {...pageProps} />
    </>
  )
}

