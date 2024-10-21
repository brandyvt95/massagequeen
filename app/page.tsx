
import styles from "./page.module.css";
import Intro from "@/components/Intro";
import Banner from "@/components/Banner";
import Booking from "@/components/Booking";
import Vouchers from "@/components/Vouchers";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Banner/>
        <Intro/>
        <Booking/>
        <Vouchers/>
      </main>
 
    </div>
  );
}
