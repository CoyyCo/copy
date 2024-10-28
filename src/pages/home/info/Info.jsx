import { useEffect, useState } from 'react'
import styles from './Info.module.scss'
import { RightSmall,Star } from '@icon-park/react'
export default function Info() {
    const [titled, setTitled] = useState('Blog')
    const [isFadingIn, setIsFadingIn] = useState(true); // 控制淡入淡出的状态
    //['', , , ]
    const titleList = { 'Blog': 'rgb(22 163 74)', 'Design': "rgb(234,88,12)", 'Brand': "rgb(37,99,235)", 'WebSite': "rgb(147,51,234)" }
    const keys = Object.keys(titleList);
    let idx = 0
    useEffect(() => {

        const interval = setInterval(() => {
            // const randomIndex = Math.floor(Math.random() * keys.length);
            if (idx === keys.length - 1) {
                idx = 0
            } else {
                idx++
            }
            const newKey = keys[idx];
            setTitled(newKey);
            setIsFadingIn(prevIsFadingIn => !prevIsFadingIn)

        }, 2000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h1>Elevate Your <span style={{ 'color': titleList[titled] }} className={`animate__animated ${isFadingIn ? 'animate__fadeIn' : 'animate__fadeOut'}`}>{titled}</span></h1>
                        <h1>with Vector Illustrations</h1>
                    </div>
                    <p>Create scalable vector illustrations that elevate your brand instantly.</p>
                </div>
                <button className={styles.btn}>
                    <span>Start Creating for Free</span>
                    <RightSmall theme="outline" size="18" fill="#fff" />
                </button>
                <div className={styles.star}>
                    <Star theme="filled" size="15" fill="#6B7280" strokeWidth={2} />
                    <Star theme="filled" size="15" fill="#6B7280" strokeWidth={2} />
                    <Star theme="filled" size="15" fill="#6B7280" strokeWidth={2} />
                    <span className={styles.spantext}>Trusted by 1k+ users</span>
                </div>
            </div>
        </>

    )
}