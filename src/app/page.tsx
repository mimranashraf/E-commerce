import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import PromoSection from "./component/PromoSection";



export default function Home() {
  return (
    <div>
   <Header />
   <PromoSection />
    </div>
  );
}
