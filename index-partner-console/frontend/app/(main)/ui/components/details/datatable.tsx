import styles from '../../../details/details.module.css';
import Image from 'next/image';

interface TableInfo{

}

const Datatable = (props:TableInfo) => {
    return (
        <>  
        <div className={styles.tablewrapper}>
            <details className={styles.table} open={true}>
                <summary className={styles.table__header}>Lorem ipsum dolorem sit et amet</summary>
                <div className={styles.row}>
                    <p className={styles.row__name}>Row 1</p>
                    <p className={styles.row__info}>Value</p>
                </div>
                <div className={styles.row}>
                    <p className={styles.row__name}>Row 2</p>
                    <p className={styles.row__info}>Value</p>
                </div>
                <div className={styles.row}>
                    <p className={styles.row__name}>Row 3</p>
                    <p className={styles.row__info}>Value</p>
                </div>
            </details>
            <Image
                    src="/uparrow.svg"
                    width={10}
                    height={10}
                    className={styles.table__icon}
                    alt="Icon"
                />
        </div>
        </>
    );
}

export default Datatable;