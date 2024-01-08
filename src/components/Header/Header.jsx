import {formatDate} from "../../helpers/formatDate.js";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>React news</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    );
};