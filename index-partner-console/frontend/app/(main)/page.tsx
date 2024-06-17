import Link from 'next/link';
import styles from './ui/home.module.css';
import Search from './ui/search';
import Stepcard from './ui/stepcard';
import { dmsans } from './ui/fonts';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <aside>
        <section className={styles.banner}>
          <div>
            <h2 className={styles.banner__header}>Looking for tools to help grow your business?</h2>
            <p className={styles.banner__desc}>Tell us where you're at in your business journey to get started.</p>
          </div>
          <button className={`${dmsans.className} ${styles.banner__button}`}>Learn more</button>
        </section>
      </aside>
      <section>
        <h1 className={`${styles.search__header}  ${dmsans.className}`}>Lorem ipsum dolorem sit et amet</h1>
        <Search/>
      </section>
      <section className={styles.cardcontainer}>
        <Stepcard path="/card.png" alt="Step 1 Image" text="Lorem ipsum dolorem"/>
        <Stepcard path="/card.png" alt="Step 2 Image" text="Lorem ipsum dolorem"/>
        <Stepcard path="/card.png" alt="Step 3 Image" text="Lorem ipsum dolorem"/>
      </section>
    </main>
  );
}