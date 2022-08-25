import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-3xl flex justify-center  mt-[20rem] mb-5">
        Its <span className="text-hacker mx-2"> hackernews </span> but with
        better
        <span className="text-hacker mx-2"> looks</span> 🤩
      </div>
      <div className="flex justify-center mt-12">
        <Link  href="/news"><div className="bg-hacker text-hlight px-10 py-4 text-xl rounded-full hover:bg-hlight hover:text-hacker border-hacker border-2 "> Get Started</div></Link>
      </div>
    </>
  );
};

export default Home;
