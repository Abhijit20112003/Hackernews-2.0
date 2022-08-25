import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-3xl flex justify-center  mt-[20rem] mb-5">
        Its <span className="text-hacker mx-2"> hackernews </span> but with
        better
        <span className="text-hacker mx-2"> looks</span> 🤩
      </div>
      <div className="flex justify-center mt-12">
        <a className="bg-hacker text-hlight px-10 py-4 text-xl rounded-full hover:bg-hlight hover:text-hacker border-hacker border-2 " href="/news">Get Started</a>
      </div>
    </>
  );
};

export default Home;
