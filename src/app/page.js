"use client";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Head from "next/head";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--scaleXrate",
        `${Math.ceil(window.innerWidth / 300)}`
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
      <Header></Header>
      <div
        style={{
          height: "110vh",
          width: "100%",
          background: "rgb(255,0,0,0.3)",
        }}
      ></div>
    </>
  );
}
