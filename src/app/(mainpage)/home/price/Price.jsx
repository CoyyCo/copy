import styles from './Price.module.scss'
export default function Price() {
    const data = [
        {
            credit: 100,
            price: 8
        },
        {
            credit: 200,
            price: 14
        },
        {
            credit: 500,
            price: 30
        }
    ]
    return (
        <div className={styles.container} id='Price'>
            <div className={styles.title}>
                <h2>No subscription. No hidden fees.</h2>
                <p>Pay only for what you need.</p>
            </div>
            <div className={styles.flex}>
                {data.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.content}>
                            <div>{item.credit} credits</div>
                            <img src={`/images/${item.credit}-credits.svg`} alt="" />
                            <div>${item.price}</div>
                            <p>${item.price / item.credit} per credit</p>
                            <button>Try for Free</button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}