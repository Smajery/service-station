import {useEffect, useState} from 'react';

import styles from './Suppliers.module.css';
import {addSuppliers, getAllSuppliers} from 'api/suppliers';
import SupplierTable from './supplier-table/SupplierTable';

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [account, setAccount] = useState('');

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [accountError, setAccountError] = useState('');

    const handleCancel = () => {
        setName('')
        setPhone('')
        setAccount('')
        setIsEdit(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        let nameErrorText = '';
        let phoneErrorText = '';
        let accountErrorText = '';

        if (name === '') {
            nameErrorText = 'Введіть постаначальника';
        }
        if (phone === '') {
            phoneErrorText = 'Введіть номер телефону';
        }
        if (account === '') {
            accountErrorText = 'Введіть акаунт';
        }
        setNameError(nameErrorText)
        setPhoneError(phoneErrorText)
        setAccountError(accountErrorText)

        if (nameErrorText === '' && phoneErrorText === '' && accountErrorText === '') {
            addSuppliers(name, phone, account)
                .then(() => {
                    const newSupplier = {
                        name: name,
                        phone: phone,
                        account: account,
                        quantity_receipts: 1,
                        quantity_receipts_fuel: 1,
                        sum_price_receipts_fuel: 1,
                    }
                    setSuppliers([...suppliers, newSupplier])
                    handleCancel()
                })
                .catch(e => {
                    console.error(e);
                    alert('Щось пішло не так');
                });
        }
    };
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
    return (
        <div className={styles.suppliersPage}>
            <div className={styles.content}>
                <div className={styles.suppliersContainer}>
                    <div className={styles.suppliersTitle}>
                        <div className={styles.name}>
                            <p>
                                Постаначальник
                            </p>
                        </div>
                        <div className={styles.phone}>
                            <p>
                                Номер телефону
                            </p>
                        </div>
                        <div className={styles.account}>
                            <p>
                                Акаунт
                            </p>
                        </div>
                        <div className={styles.quantityReceipts}>
                            <p>
                                Кількість накладних
                            </p>
                        </div>
                        <div className={styles.quantityReceiptsFuel}>
                            <p>
                                Кількість накладних по ПММ
                            </p>
                        </div>
                        <div className={styles.sum}>
                            <p>
                                Сума накладних
                            </p>
                        </div>
                    </div>
                    <form className={styles.suppliersForm}
                          onSubmit={handleSubmit}
                    >
                        <input disabled={!isEdit}
                               className={`${styles.inputName} ${nameError && styles.error}`}
                               placeholder='Постаначальник'
                               value={name}
                               onChange={e => setName(e.target.value)}
                        />
                        <input disabled={!isEdit}
                               className={`${styles.inputPhone} ${phoneError && styles.error}`}
                               placeholder='Номер'
                               value={phone}
                               onChange={e => setPhone(e.target.value)}
                        />
                        <input disabled={!isEdit}
                               className={`${styles.inputAccount} ${accountError && styles.error}`}
                               placeholder='Акаунт'
                               value={account}
                               onChange={e => setAccount(e.target.value)}
                        />
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
                                <button className={styles.addGasBtn}
                                        type='button'
                                        onClick={() => setIsEdit(true)}
                                >
                                    Додати
                                </button>
                            </div>
                        )}
                    </form>
                    <SupplierTable suppliers={suppliers} />
                </div>
            </div>
        </div>
    );
};

export default Suppliers;