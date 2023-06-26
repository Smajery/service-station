import styles from './SupplierTable.module.css';
import {checkArr} from 'utils/check-arr';
import SupplierItem from './supplier-item/SupplierItem';

const SupplierTable = ({suppliers}) => {
    return (
        <table className={styles.suppliersTable}>
            <tbody>
            {checkArr(suppliers) ? (
                suppliers.map((supplier) => (
                    <SupplierItem key={supplier.id}
                                  supplier={supplier}
                    />
                ))
            ) : (
                <tr className={styles.emptyTable}>
                    <td>
                        Список постаначальників порожній
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default SupplierTable;