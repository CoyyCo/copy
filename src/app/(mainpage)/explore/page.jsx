"use client";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Box from "./box";
import styles from "./page.module.scss";
export default function index() {
  const renderDatas = [
    {
      title: "Main",
      count: 110,
      img: [
        "/images/genImage/chasing-dreams.svg",
        "/images/genImage/city-walk-media-logo-1.svg",
        "/images/genImage/coding-competition-intro.svg",
        "/images/genImage/feline-ascent.svg",
        "/images/genImage/helpless-panda-1.svg",
        "/images/genImage/lunar-classroom.svg",
      ],
    },
    {
      title: "Technology",
      count: 83,
      img: [
        "/images/genImage/chasing-dreams.svg",
        "/images/genImage/city-walk-media-logo-1.svg",
        "/images/genImage/coding-competition-intro.svg",
        "/images/genImage/feline-ascent.svg",
        "/images/genImage/helpless-panda-1.svg",
        "/images/genImage/lunar-classroom.svg",
      ],
    },
    {
      title: "Education",
      count: 71,
      img: [
        "/images/genImage/chasing-dreams.svg",
        "/images/genImage/city-walk-media-logo-1.svg",
        "/images/genImage/coding-competition-intro.svg",
        "/images/genImage/feline-ascent.svg",
        "/images/genImage/helpless-panda-1.svg",
        "/images/genImage/lunar-classroom.svg",
      ],
    },
    {
      title: "Logo",
      count: 32,
      img: [
        "/images/genImage/chasing-dreams.svg",
        "/images/genImage/city-walk-media-logo-1.svg",
        "/images/genImage/coding-competition-intro.svg",
        "/images/genImage/feline-ascent.svg",
        "/images/genImage/helpless-panda-1.svg",
        "/images/genImage/lunar-classroom.svg",
      ],
    },
    {
      title: "Nature",
      count: 56,
      img: [
        "/images/genImage/chasing-dreams.svg",
        "/images/genImage/city-walk-media-logo-1.svg",
        "/images/genImage/coding-competition-intro.svg",
        "/images/genImage/feline-ascent.svg",
        "/images/genImage/helpless-panda-1.svg",
        "/images/genImage/lunar-classroom.svg",
      ],
    },
  ];

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
      <input type="search" placeholder="Search sth here..." />
      </div>
      {renderDatas.map((renderData, index) => (
        <Box key={index} renderData={renderData} />
      ))}
      <Footer></Footer>
    </>
  );
}
