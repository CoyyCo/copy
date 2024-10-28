import styles from "./Footer.module.scss";
import Link from "next/link";
export default function Footer() {
  const pageInfo = [
    {
      title: "Product",
      list: ["Explore", "Pricing", "FAQ"],
    },
    {
      title: "Legal",
      list: ["Terms", "Privacy"],
    },
    {
      title: "Contact",
      list: ["Email", "Discord"],
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.webInfo}>
          <img src="/images/logo.png" alt="log" />
          <p>Create beautiful illustrations for your projects in seconds.</p>
          <p>© 2024 IllustraAI. All Rights Reserved.</p>
          <div>
            Built by <a href="xxx">@houjk</a>
          </div>
        </div>  
        {pageInfo.map((item, index) => (
          <div className={styles.pageInfo} key={index}>
          <h3>{item.title}</h3>
          <ul>
            {item.list.map((i, index) => (
              <li key={index}>
                <Link href={`/${i}/${i}`}>{i}</Link>
              </li>
            ))}
          </ul>
          </div>
        ))}
      </footer>
    </>
  );
}
