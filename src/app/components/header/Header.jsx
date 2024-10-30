"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;

      if (y > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  //GET方法
  const { data, error } = useSWR('/api/faq', fetcher);
  // console.log(data);
  // console.log(error);
  //POST方法
  // const { data, error } = useSWR(
  //   () => "/api/faq",
  //   (url) => fetcher(url, "POST", { data: "111" }, {}),
  //   {}
  // );
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <img src="/images/logo.png" alt="logo" />
          <nav className={styles.nav1}>
            <ul>
              <li>
                <Link href={"/"}>Create</Link>
              </li>
              <li>
                <Link href={"/explore"}>Export</Link>
              </li>
              <li>
                <Link href={"/#Price"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/#FAQ"}>FAQ</Link>
              </li>
            </ul>
          </nav>
          <button>Try for free</button>
        </div>
      </header>
    </>
  );
}
