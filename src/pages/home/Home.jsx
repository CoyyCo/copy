import Header from "@/app/components/header/Header";
import Info from "./info/Info";
import FAQ from "../faq/FAQ";
import Footer from "@/app/components/footer/Footer";
export default function home() {
  return (
    <>
      <Header></Header>
      <Info></Info>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}
