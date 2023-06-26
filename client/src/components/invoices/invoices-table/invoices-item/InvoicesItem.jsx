import styles from './InvoicesItem.module.css';

const InvoicesItem = ({invoice}) => {
    return (
        <tr className={styles.invoicesItem}>
            <td className={styles.supplier}>
                {invoice.supplier}
            </td>
            <td className={styles.fal}>
                {invoice.fal}
            </td>
            <td className={styles.price}>
                {invoice.price}
            </td>
            <td className={styles.quantity}>
                {invoice.quantity}
            </td>
            <td className={styles.address}>
                {invoice.address}
            </td>
            <td className={styles.receiver}>
                {invoice.receiver}
            </td>
        </tr>
    );
};

export default InvoicesItem;