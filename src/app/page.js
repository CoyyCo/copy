"use client";
import styles from "./page.module.css";
import { useEffect, useCallback } from "react";
import Home from "@/pages/home/Home";
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
    </>
  );
}
