import Header from "@/app/components/header/Header";
import Info from "./info/Info";
import Faq from "./faq/Faq";
import Footer from "@/app/components/footer/Footer";
import Price from "./price/Price";
import Pictureslick from "./pictureslick/Pictureslick";
export default function home() {
  return (
    <>
      <Header></Header>
      <Info></Info>
      <Pictureslick></Pictureslick>
      <Price></Price>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
