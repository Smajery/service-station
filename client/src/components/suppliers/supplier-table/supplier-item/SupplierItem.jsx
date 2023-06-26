import styles from './SupplierItem.module.css';

const SupplierItem = ({supplier}) => {
    return (
        <tr className={styles.suppliersItem}>
            <td className={styles.name}>
                {supplier.name}
            </td>
            <td className={styles.phone}>
                {supplier.phone}
            </td>
            <td className={styles.account}>
                {supplier.account}
            </td>
            <td className={styles.quantityReceipts}>
                {supplier.quantity_receipts}
            </td>
            <td className={styles.quantityReceiptsFuel}>
                {supplier.quantity_receipts_fuel}
            </td>
            <td className={styles.sum}>
                {supplier.sum_price_receipts_fuel}
            </td>
        </tr>
    );
};

export default SupplierItem;