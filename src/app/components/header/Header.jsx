import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flow}`}>
        <img src="/images/logo.png" alt="logo" />
        <nav>
          <ul>
            <li>Create</li>
            <li>Export</li>
            <li>Pricing</li>
            <li>FQA</li>
          </ul>
        </nav>
        <button>Try for free</button>
      </div>
    </header>
  );
}
