'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.css';
import { usePathname } from 'next/navigation'
import Navlink from './navlink';

const Navbar = () => {
    const path = usePathname()
    //console.log("Styles:", styles);
    return (
      <>
        <aside className={`${styles.navbar}`}>
          <div>
            <Image src="/palmlogo.svg"
                    className={styles.navbar__logo}
                    width={112}
                    height={32}
                    alt="Palm Logo"/>

            <Navlink path={path} name="/" icon="/bulb.svg" text="Search"/>
  
            <Navlink path={path} name="/results" icon="/bulb.svg" text="Search Results"/>
            <Navlink path={path} name="/details" icon="/bulb.svg" text="Details"/>
          </div>
      
            <div className={styles.navbar__separator}>
              <Navlink path={path} name="/login" icon="/bulb.svg" text="Login"/>   
            </div> 

        </aside>
      </>
    );
  };
  
  export default Navbar;