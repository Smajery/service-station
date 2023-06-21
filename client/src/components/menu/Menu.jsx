import styles from './Menu.module.css';
import NavList from './nav-list/NavList';

const Menu = () => {

    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <NavList />
            </div>
        </div>
    );
};

export default Menu;