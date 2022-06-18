import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import Header from "./components/header";
import Content from "./components/content";

import Styles from "../styles/Home.module.css";

export default function Home() {
  let title = "ok";
  const { data, error } = useSWR("/api/message");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={titile} />
      <p>{data.message}</p>
      {/* ↓styleの当て方 */}
      <div>
        {/* Linkを付けるときはLinkタグにて */}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>
        {`
          h1 {
            color: white;
          }
        `}
      </style>
    </Content>
  );
}
