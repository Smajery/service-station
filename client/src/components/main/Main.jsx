import AppRouter from '../AppRouter';
import styles from './Main.module.css'

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <AppRouter />
            </div>
        </main>
    );
};

export default Main;