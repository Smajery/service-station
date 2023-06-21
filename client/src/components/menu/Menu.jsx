import styles from './Menu.module.css';
import NavList from './nav-list/NavList';
import signOutImg from 'static/icons/sign-out.svg';

const Menu = () => {

    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <NavList />
                <div className={styles.signOutContainer}>
                    <button className={styles.signOutBtn}>
                        Вийти
                    </button>
                    <img src={signOutImg}
                         alt={'Log out'}
                         width={30}
                         height={30}
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;