import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <NavLink className={styles.nav_link} to="/">Home</NavLink>
                        </li>
                           <li className={styles.nav_item}>
                            <NavLink className={styles.nav_link} to="/about">About</NavLink>
                        </li>
                           <li className={styles.nav_item}>
                            <NavLink className={styles.nav_link} to="/catalogue">Catalogue</NavLink>
                        </li>
                               <li className={styles.nav_item}>
                            <NavLink className={styles.nav_link} to="/calculator">Calculator</NavLink>
                        </li>
                           <li className={styles.nav_item}>
                            <NavLink className={styles.nav_link} to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;