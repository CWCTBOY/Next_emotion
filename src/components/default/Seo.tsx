import Head from "next/head";

function Seo({ title }: { title: string; }) {
  return (
    <Head>
      <link href="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" rel="shortcut icon" type="image/x-icon"></link>
      <title>{title} | NETFLEX</title>
    </Head>
  )
}
export default Seo;