import { useState } from 'react';
import styles from './Pictureslick.module.scss'
import Slider from 'react-slick'
export default function Pictureslick() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        // adaptiveHeight: true,
        rtl: true
    };
    const [pic, setPic] = useState([
        {
            slider: 1,
            data: ["/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg"]
        },
        {
            slider: 2,
            data: ["/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg",]
        },
        {
            slider: 3,
            data: ["/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/inefficient-persona.svg"]
        }, {
            slider: 4,
            data: ["/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/inefficient-persona.svg", "/images/genImage/3d-client-needs-graph.svg", "/images/genImage/3d-client-needs-graph.svg"]
        }
    ])
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {pic.map((item) => (
                    <div className={styles.slider} key={item.slider}>
                        <Slider {...settings} rtl={item.slider % 2 == 0 ? true : false}>
                            {item.data.map((img, i) => (
                                <img src={img} alt="" key={i} />
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </div>
    )
}