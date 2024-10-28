import styles from './Footer.module.scss'
export default function Footer() {
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
                <div className={styles.pageInfo}>
                    <title>Product</title>
                    <ul>
                        <li>Explore</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={styles.pageInfo}>
                    <title>Product</title>
                    <ul>
                        <li>Explore</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={styles.pageInfo}>
                    <title>Product</title>
                    <ul>
                        <li>Explore</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}