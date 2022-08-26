import { NextPage } from "next";

const register: NextPage = () => {
  return (
    <>
      <div className="flex justify-center my-[2rem] ">
        <div className="text-[40px]">Register</div>
      </div>
      <form action="" method="post" autoComplete="off" className="text-[20px]">
        <div className="flex justify-center my-[2rem]">
          <div className="">Username</div>
        </div>
        <div className="flex justify-center my-[2rem]">
          <input type="text" name="username" placeholder="Name" />
        </div>
        <div className="flex justify-center my-[2rem]">
          <div className="">Email</div>
        </div>
        <div className="flex justify-center my-[2rem]">
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="flex justify-center my-[2rem]">
          <div className="">Password</div>
        </div>
        <div className="flex justify-center my-[2rem]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <div className="flex justify-center my-[2rem]">
          <div className="">Confirm Password</div>
        </div>
        <div className="flex justify-center my-[2rem]">
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-center my-[2rem]">
          <button type="submit" className="bg-hacker text-hlight border-2 px-8 py-3 font-semibold rounded-full hover:bg-hlight hover:text-hacker border-hacker">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default register;
