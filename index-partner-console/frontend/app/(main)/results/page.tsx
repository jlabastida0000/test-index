import styles from '../ui/home.module.css';
import Search from '../ui/search';
import Tablecard from '../ui/tablecard';
import { dmsans } from '../ui/fonts';

export default function Results() {
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
      <section className={styles.tablelist}>
        <Tablecard path="/card.png" name="ABC" address="NW 68th ST 5389, Miami FL 33166, USA" phone="(123) 456-7890" website="website.com" />
        <Tablecard path="/card.png" name="ABC" address="NW 68th ST 5389, Miami FL 33166, USA" phone="(123) 456-7890" website="website.com" />
        <Tablecard path="/card.png" name="ABC" address="NW 68th ST 5389, Miami FL 33166, USA" phone="(123) 456-7890" website="website.com" />

      </section>
    </main>
  );
}