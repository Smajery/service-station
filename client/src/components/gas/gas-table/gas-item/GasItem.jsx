import styles from './GasItem.module.css';

const GasItem = ({gas}) => {

    return (
        <tr className={styles.gasItem}>
            <td className={styles.name}>
                {gas.name}
            </td>
            <td className={styles.quantity}>
                {gas.quantity}
            </td>
            <td className={styles.type}>
                {gas.type === 0 ? (
                    'Пальне'
                ) : (
                    'Мастильне'
                )}
            </td>
            <td className={styles.button}>
                <div className={styles.btnContainer}>
                </div>
            </td>
        </tr>
    );
};

export default GasItem;