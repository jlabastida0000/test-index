import styles from '../../../details/details.module.css';
import Image from 'next/image';

interface CardInfo{
    path: string;
    title: string;
    value: string;
}

const Kpicard = (props:CardInfo) => {
    return (
        <>
            <div className={styles.kpicard}>
                <Image
                src={props.path}
                width={36}
                height={36}
                className={styles.kpicard__img}
                alt="Icon"
                />
                <p className={styles.kpicard__title}>{props.title}</p>
                <h2 className={styles.kpicard__value}>{props.value}</h2>
            </div>
        </>
    );
}

export default Kpicard;