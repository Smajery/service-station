import {useEffect, useState} from 'react';

import styles from './Invoices.module.css';
import {addReceipts, getAllInvoices, getAllReceipts, getAllStations} from 'api/invoices';
import InvoicesTable from './invoices-table/InvoicesTable';
import {getAllSuppliers} from 'api/suppliers';
import {checkArr} from 'utils/check-arr';
import {getAllUser} from 'api/user';
import {format} from 'date-fns';
import {getAllGas} from 'api/gas';

const Invoices = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [gases, setGases] = useState([]);

    const todayDate = new Date();
    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    const [invoicesRec, setInvoicesRec] = useState([]);
    const [invoiceRec, setInvoiceRec] = useState('');
    const [invoiceRecError, setInvoiceRecError] = useState('');

    const [stations, setStations] = useState([]);
    const [station, setStation] = useState('');
    const [stationError, setStationError] = useState('');

    const [suppliers, setSuppliers] = useState([]);
    const [supplier, setSupplier] = useState('');
    const [supplierError, setSupplierError] = useState('');

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState('');

    const handleCancel = () => {
        setUser('');
        setStation('');
        setSupplier('');
        setInvoiceRec('');
        setIsEdit(false);
    };


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

    useEffect(() => {
        getAllGas()
            .then(data => {
                setGases(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    useEffect(() => {
        getAllUser()
            .then(data => {
                const newData = data.filter((data) => data.role === 'ADMIN');
                setUsers(newData);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    useEffect(() => {
        getAllStations()
            .then(data => {
                setStations(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    useEffect(() => {
        getAllInvoices()
            .then(data => {
                setInvoicesRec(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    useEffect(() => {
        getAllSuppliers()
            .then(data => {
                setSuppliers(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    const handleSubmit = () => {
        let supplierErrorText = '';
        let userErrorText = '';
        let stationErrorText = '';
        let invoiceRecErrorText = '';

        if (supplier === '') {
            supplierErrorText = 'Введіть постаначальника';
        }
        if (user === '') {
            userErrorText = 'Введіть отримувача';
        }
        if (station === '') {
            stationErrorText = 'Введіть станцію';
        }
        if (invoiceRec === '') {
            invoiceRecErrorText = 'Введіть';
        }
        setSupplierError(supplierErrorText);
        setUserError(userErrorText);
        setStationError(stationErrorText);
        setInvoiceRecError(invoiceRecErrorText);

        if (supplierErrorText === '' && userErrorText === '' && stationErrorText === '' && invoiceRecError === '') {
            const formattedTodayDate = getFormattedDate(todayDate);
            addReceipts(supplier, user, formattedTodayDate, station, invoiceRec)
                .then(() => {
                    handleCancel();
                })
                .catch(e => {
                    console.error(e);
                    alert('Щось пішло не так');
                });
        }
    };

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
                    <form className={styles.invoicesForm}
                          onSubmit={handleSubmit}
                    >
                        <select value={supplier}
                                onChange={e => setSupplier(e.target.value)}
                                disabled={!isEdit}
                                className={`${styles.supplier} ${supplierError && styles.error}`}
                        >
                            <option>Виберіть</option>
                            {checkArr(suppliers) && (
                                suppliers.map((supplier) => (
                                    <option key={supplier.id}
                                            value={supplier.id}
                                    >
                                        {supplier.name}
                                    </option>
                                ))
                            )}
                        </select>
                        <select value={invoiceRec}
                                onChange={e => setInvoiceRec(e.target.value)}
                                disabled={!isEdit}
                                className={`${styles.invoice} ${invoiceRecError && styles.error}`}
                        >
                            <option>Виберіть</option>
                            {checkArr(invoicesRec) && (
                                invoicesRec.map((invoiceRec) => (
                                    <option key={invoiceRec.id}
                                            value={invoiceRec.id}
                                    >
                                        {gases.find((gas) => gas.id === invoiceRec.fal_id).name}-{invoiceRec.price}-{invoiceRec.quantity}
                                    </option>
                                ))
                            )}
                        </select>
                        <select value={station}
                                onChange={e => setStation(e.target.value)}
                                disabled={!isEdit}
                                className={`${styles.station} ${stationError && styles.error}`}
                        >
                            <option>Виберіть</option>
                            {checkArr(stations) && (
                                stations.map((station) => (
                                    <option key={station.station_number}
                                            value={station.station_number}
                                    >
                                        №{station.station_number} ({station.address})
                                    </option>
                                ))
                            )}
                        </select>
                        <select value={user}
                                onChange={e => setUser(e.target.value)}
                                disabled={!isEdit}
                                className={`${styles.user} ${userError && styles.error}`}
                        >
                            <option>Виберіть</option>
                            {checkArr(users) && (
                                users.map((user) => (
                                    <option key={user.id}
                                            value={user.id}
                                    >
                                        {user.name}
                                    </option>
                                ))
                            )}
                        </select>
                        {isEdit ? (
                            <div className={styles.btnContainer}>
                                <button className={styles.cancelBtn}
                                        type='button'
                                        onClick={handleCancel}
                                >
                                    x
                                </button>
                                <button className={styles.confirmBtn}
                                        type='submit'
                                >
                                    ✓
                                </button>
                            </div>

                        ) : (
                            <div className={styles.btnContainer}>
                                <button className={styles.addReceiptBtn}
                                        type='button'
                                        onClick={() => setIsEdit(true)}
                                >
                                    Створити
                                </button>
                            </div>
                        )}
                    </form>
                    <InvoicesTable invoices={invoices} />
                </div>
            </div>
        </div>
    );
};

export default Invoices;