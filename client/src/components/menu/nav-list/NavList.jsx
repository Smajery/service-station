import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import styles from './NavList.module.css';
import {checkArr} from 'utils/check-arr';
import {adminPaths, attendantPaths, driverPaths, managerPaths} from 'utils/nav-paths';

const NavList = () => {
    const {user} = useSelector(state => state.authReducer);

    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;

    if (Object.keys(user).length !== 0) {
        switch (user.role) {
            case 'ADMIN':
                return (
                    <ul className={styles.navList}>
                        {checkArr(adminPaths) && adminPaths.map((path) => (
                            <li key={path.path}
                                onClick={() => navigate(path.path)}
                                className={`${styles.navItem} ${currentPath === path.path && styles.active}`}
                            >
                                <img src={path.icon}
                                     alt={path.title}
                                     width={25}
                                     height={25}
                                     className={styles.navItem__img}
                                />
                                <p className={styles.navItem__text}>
                                    {path.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            case 'ATTENDANT':
                return (
                    <ul className={styles.navList}>
                        {checkArr(attendantPaths) && attendantPaths.map((path) => (
                            <li key={path.path}
                                onClick={() => navigate(path.path)}
                                className={`${styles.navItem} ${currentPath === path.path && styles.active}`}
                            >
                                <img src={path.icon}
                                     alt={path.title}
                                     width={25}
                                     height={25}
                                     className={styles.navItem__img}
                                />
                                <p className={styles.navItem__text}>
                                    {path.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            case 'MANAGER':
                return (
                    <ul className={styles.navList}>
                        {checkArr(managerPaths) && managerPaths.map((path) => (
                            <li key={path.path}
                                onClick={() => navigate(path.path)}
                                className={`${styles.navItem} ${currentPath === path.path && styles.active}`}
                            >
                                <img src={path.icon}
                                     alt={path.title}
                                     width={25}
                                     height={25}
                                     className={styles.navItem__img}
                                />
                                <p className={styles.navItem__text}>
                                    {path.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            case 'DRIVER':
                return (
                    <ul className={styles.navList}>
                        {checkArr(driverPaths) && driverPaths.map((path) => (
                            <li key={path.path}
                                onClick={() => navigate(path.path)}
                                className={`${styles.navItem} ${currentPath === path.path && styles.active}`}
                            >
                                <img src={path.icon}
                                     alt={path.title}
                                     width={25}
                                     height={25}
                                     className={styles.navItem__img}
                                />
                                <p className={styles.navItem__text}>
                                    {path.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            default:
                return (
                    <div>
                        Панель керування з'явиться після отримання ролі
                    </div>
                );
        }
    } else {
        return (
            <div>
                Щось пішло не так.
            </div>
        );
    }
};

export default NavList;