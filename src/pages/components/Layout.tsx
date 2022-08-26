import Navbar from "./Navbar";
import { FC } from "react";

export default function Layout({ children }: { children: FC }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )};
