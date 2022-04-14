import Head from "next/head";
type Seo = { title: string }

function Seo({ title }: Seo) {
  return (
    <Head>
      <title>{title} | NETFLEX</title>
    </Head>
  )
}
export default Seo;