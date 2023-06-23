import {useActions} from 'hooks/UseActions';
import {useNavigate} from 'react-router-dom';

import styles from './Menu.module.css';
import NavList from './nav-list/NavList';
import signOutImg from 'static/icons/sign-out.svg';

const Menu = () => {
    const navigate = useNavigate();
    const {setUser} = useActions();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser({});
        navigate('/sign-in');
    };

    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <NavList />
                <div className={styles.signOutContainer}>
                    <button className={styles.signOutBtn}
                            onClick={handleSignOut}
                    >
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