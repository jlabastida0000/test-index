'use client'
import styles from './details.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Kpicard from '../ui/components/details/kpicard';
import Datatable from '../ui/components/details/datatable';

export default function Details() {

  return (
    <main className={styles.mainContainer}>
      <div className={styles.return__wrapper}>
        <Image
          src="/ArrowUUpLeft.svg"
          alt="back"
          width={16}
          height={16}
          className={styles.return__image}
        />
        <Link href="/" className={styles.return__button} >Back to Index Search</Link>
      </div>
      <section className={styles.merchant}>
        <Image
            src="/card.png"
            alt="image"
            width={40}
            height={40}
            className={styles.merchant__image}
        />
        <div>
          <h1 className={styles.merchant__name}>Merchant Name</h1>
          <p className={styles.merchant__address}>website.com</p>
        </div>
      </section>
      <section className={styles.kpilist}>
        <Kpicard path="/card.png" title="KPI 1" value="123" />
        <Kpicard path="/card.png" title="KPI 2" value="123.00" />
        <Kpicard path="/card.png" title="KPI 3" value="123" />
      </section>
      <section className={styles.tablelist}>
        <Datatable />
        <Datatable />
      </section>
    </main>
  );
}