import AppRouter from '../AppRouter';
import Menu from 'components/menu/Menu';
import styles from './Main.module.css';

const Main = () => {
    const currentUser = {
        role: 'ADMIN'
    }
    localStorage.setItem('user', JSON.stringify(currentUser))
    const user = JSON.parse(localStorage.getItem('user'))

    return user && user.role !== '' ? (
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