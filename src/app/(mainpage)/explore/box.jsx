import Slider from "react-slick";
import { RightSmall } from "@icon-park/react";
import styles from "./page.module.scss";
export default function Box({ renderData }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>
          <h2>{renderData.title}</h2>
          <span>({renderData.count} illustrations)</span>
          <RightSmall theme="outline" size="18" fill="#333" />
        </div>
        <Slider {...settings}>
          {renderData.img.map((i, index) => (
            <img src={i} alt="" key={index} />
          ))}
        </Slider>
      </div>
    </>
  );
}
