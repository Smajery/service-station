import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.content}>
                Сторінка не знайдена. Сталася помилка 404.
            </div>
        </div>
    );
};

export default Error;