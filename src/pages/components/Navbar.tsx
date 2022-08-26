import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>HackerNews</title>
        <meta name="description" content="HackerNews but with better looks" />
      </Head>
      <div className="flex justify-center my-10 text-2xl">
        <div className="mx-[2rem] text-hacker">
          <Link href="/">Hackernews</Link>
        </div>
        <div className="mx-[2rem] text-hacker">
          <Link href="/news">News</Link>
        </div>
        <div className="mx-[2rem]">
          <Link href="/register">Register</Link>
        </div>
        <div className="mx-[2rem]">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
