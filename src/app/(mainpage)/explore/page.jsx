import styles from './page.module.scss'
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Box from './box'
export default function index() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,

    };
    return (
        <>
            <Header></Header>
            {/* <div className={styles.container}>
                <input type="search" placeholder='Search sth here...' />
                <div className={styles.box}>
                    <div className={styles.title}>
                        <span></span>
                        <span></span>
                        <RightSmall theme="outline" size="18" fill="#333" />
                    </div>
                    <Slider {...settings}>
                        <img src="/images/genImage/balanced-see-saw.svg" alt="" />
                        <img src="/images/genImage/chasing-dreams.svg" alt="" />
                        <img src="/images/genImage/city-walk-media-logo-1.svg" alt="" />
                        <img src="/images/genImage/coding-competition-intro.svg" alt="" />
                        <img src="/images/genImage/feline-ascent.svg" alt="" />
                        <img src="/images/genImage/helpless-panda-1.svg" alt="" />
                        <img src="/images/genImage/lunar-classroom.svg" alt="" />
                    </Slider>
                </div>
            </div> */}
            <Box></Box>
            <Footer></Footer>
        </>
    )
}