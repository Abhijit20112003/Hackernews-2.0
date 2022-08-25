import { NextPage } from "next";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const News: NextPage = () => {
  return (
    <>
      <div className="text-3xl flex justify-center  mt-[20rem] mb-5">
        Top <span className="text-hacker mx-2"> News 📰</span>
      </div>
      <div className="flex justify-center mt-12">
        <Link
          className="flex bg-hacker text-hlight px-10 py-4 text-xl rounded-full hover:bg-hlight hover:text-hacker border-hacker border-2 "
          href="/">
          <AiOutlineArrowLeft className="mr-5 " size={30} />Back to Home Page
        </Link>
      </div>
    </>
  );
};

export default News;
