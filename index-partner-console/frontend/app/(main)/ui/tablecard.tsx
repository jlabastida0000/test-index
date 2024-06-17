import styles from './home.module.css';
import Image from 'next/image';

interface RowInfo{
    name: string;
    phone: string;
    address: string;
    website: string;
    path: string;
}

const Tablecard = (props:RowInfo) => {
    return (
        <>
            <div className={styles.tablelist__wrapper}>
                <Image
                        src={props.path}
                        width={40}
                        height={40}
                        className={styles.tablelist__img}
                        alt="Logo"
                    />
                    <div className={styles.tablelist__infowrapper}>
                        <p className={styles.tablelist__name}>{props.name}</p>
                        <p className={styles.tablelist__info}>{props.address} •  {props.phone} • {props.website}</p>
                    </div>
                    <Image
                        src="/CaretRight.svg"
                        width={16}
                        height={16}
                        className={styles.tablelist__icon}
                        alt="Arrow"
                    />
            </div>     
        </>
    );
}

export default Tablecard;