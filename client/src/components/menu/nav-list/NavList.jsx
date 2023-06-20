import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import styles from './NavList.module.css';
import {checkArr} from 'utils/check-arr';
import {adminPaths, attendantPaths, driverPaths, managerPaths} from 'utils/nav-paths';

const NavList = () => {
    const role = 'ATTENDANT';

    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;


    switch (role) {
        case 'ADMIN':
            return (
                <ul className={styles.navList}>
                    {checkArr(adminPaths) && adminPaths.map((path) => (
                        <li key={path.path}
                            onClick={() => navigate(path.path)}
                            className={`${styles.navItem}`}
                        >
                            <p className={`${styles.navItem__text} ${currentPath === path.path && styles.active}`}>
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
                            className={`${styles.navItem}`}
                        >
                            <p className={`${styles.navItem__text} ${currentPath === path.path && styles.active}`}>
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
                            className={`${styles.navItem}`}
                        >
                            <p className={`${styles.navItem__text} ${currentPath === path.path && styles.active}`}>
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
                            className={`${styles.navItem}`}
                        >
                            <p className={`${styles.navItem__text} ${currentPath === path.path && styles.active}`}>
                                {path.title}
                            </p>
                        </li>
                    ))}
                </ul>
            );
        default:
            return (
                <ul>
                    <li>
                        <p>
                            Ви не авторизовані
                        </p>
                    </li>
                </ul>
            );
    }
};

export default NavList;