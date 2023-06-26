import styles from './InvoicesTable.module.css';
import {checkArr} from 'utils/check-arr';
import InvoicesItem from './invoices-item/InvoicesItem';

const InvoicesTable = ({invoices}) => {
    return (
        <table className={styles.invoicesTable}>
            <tbody>
            {checkArr(invoices) ? (
                invoices.map((invoice) => (
                    <InvoicesItem key={invoice.id}
                                  invoice={invoice}
                    />
                ))
            ) : (
                <tr className={styles.emptyTable}>
                    <td>
                        Список накладних порожній
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default InvoicesTable;