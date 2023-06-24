import {useSelector} from 'react-redux';

import AppRouter from '../AppRouter';
import Menu from 'components/menu/Menu';
import styles from './Main.module.css';

const Main = () => {
    const {user} = useSelector(state => state.authReducer)

    return Object.keys(user).length !== 0 ? (
        <main className={styles.main}>
            <Menu />
            <div className={styles.rightBar}>
                <AppRouter />
            </div>
        </main>
    ) : (
        <main className={styles.main}>
            <div className={styles.content}>
                <AppRouter />
            </div>
        </main>
    );
};

export default Main;