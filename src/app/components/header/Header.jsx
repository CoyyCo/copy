import Link from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      if (y > 56) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  const gohref = () => {
    alert('aa')
  };
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
                <Link href={"/"}>Export</Link>
              </li>
              <li>
                <Link href={"/"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/"}>FQA</Link>
              </li>
            </ul>
          </nav>
          <button onClick={gohref}>Try for free</button>
        </div>
      </header>
    </>
  );
}
