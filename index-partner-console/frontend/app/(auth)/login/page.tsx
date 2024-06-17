import Link from 'next/link';
import styles from './login.module.css';
import Image from 'next/image';
import { dmsans } from '../../(main)/ui/fonts';
import bg from '../../../public/login.jpg'

export default function Login() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.login__block}>
        <Image
          src="/greenlogo.svg"
          alt="Palm Logo"
          width={140}
          height={40}
          className={styles.login__logo}
        />
        <div className={styles.login__text}>
          <h1 className={styles.login__heading}>Welcome to Palm!</h1>
          <p className={styles.login__paragraph}>Lorem ipsum dolorem sit et amet</p>
        </div>
        <section className={styles.login__fields}>
          <input type="email" placeholder="Email Address" className={`${styles.login__input} ${dmsans.className}`} required/>
          <input type="password" placeholder="Password" className={`${styles.login__input} ${dmsans.className}`} required/>
        </section>
        <Link href="/" className={styles.login__button}>Login</Link>
      </section>
      <aside style={{backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', width: '50%', height: '100vh',}}>
      </aside>
    </main>
  );
}