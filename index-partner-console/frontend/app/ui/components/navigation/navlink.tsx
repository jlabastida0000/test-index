import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './nav.module.css';

interface PageInfo{
    path: string;
    name: string;
    icon: string;
    text: string;
}

const Navlink = (props:PageInfo) => {
    return (
      <>
        <nav>
            <Link href={props.name} className={clsx({
                [styles['navbar__nav--highlighted']]: props.path == props.name, 
                [styles['navbar__nav']]: props.path != props.name
            })}>
                <Image src={props.icon}
                className={styles.navbar__navicon}
                width={32}
                height={32}
                alt="Decorative Icon"/>
                <p className={styles["navbar__navtext"]}>{props.text}</p>
            </Link> 
        </nav>
      </>
    );
  };
  
  export default Navlink;