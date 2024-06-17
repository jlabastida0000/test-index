import styles from './home.module.css';
import Image from 'next/image';

interface CardInfo{
    path: string;
    alt: string;
    text: string;
}

const Stepcard = (props:CardInfo) => {
    return (
        <>
            <div className={styles.stepcard}>
                <Image
                src={props.path}
                width={308}
                height={180}
                className={styles.stepcard__img}
                alt={props.alt}
                />
                <p className={styles.stepcard__text}>{props.text}</p>
            </div>
        </>
    );
}

export default Stepcard;