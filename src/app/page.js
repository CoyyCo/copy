"use client";
import { useEffect } from "react";
import Home from "@/app/(mainpage)/home/Home";
import Page from "@/app/(mainpage)/explore/page"
export default function index() {
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--scaleXrate",
        `${window.innerWidth / 300}`
      );
    };

    handleResize(); // 初始化设置
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Home></Home>
      {/* <Page></Page> */}
    </>
  );
}
