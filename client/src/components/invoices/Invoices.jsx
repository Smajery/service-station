import {useEffect, useState} from 'react';

import styles from './Invoices.module.css';
import {getAllReceipts} from 'api/invoices';
import InvoicesTable from './invoices-table/InvoicesTable';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getAllReceipts()
            .then(data => {
                setInvoices(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.invoicesPage}>
            <div className={styles.content}>
                <div className={styles.invoicesContainer}>
                    <div className={styles.invoicesTitle}>
                        <div className={styles.supplier}>
                            <p>
                                Постачальник
                            </p>
                        </div>
                        <div className={styles.fal}>
                            <p>
                                ПММ
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>
                                Вартість
                            </p>
                        </div>
                        <div className={styles.quantity}>
                            <p>
                                Кількість
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                Адреса
                            </p>
                        </div>
                        <div className={styles.receiver}>
                            <p>
                                Отримувач
                            </p>
                        </div>
                    </div>
                    {/*<form className={styles.invoicesForm}*/}
                    {/*      onSubmit={handleSubmit}*/}
                    {/*>*/}
                    {/*    <input/>*/}
                    {/*</form>*/}
                    <InvoicesTable invoices={invoices} />
                </div>
            </div>
        </div>
    );
};

export default Invoices;