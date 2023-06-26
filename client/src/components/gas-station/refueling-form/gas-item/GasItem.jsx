import {useState} from 'react';

import styles from '../RefuelingForm.module.css';

const GasItem = ({gas, setFalList, falList}) => {
    const [isEdit, setIsEdit] = useState(false)
    const numPattern = /^[0-9]+$/;

    const [price, setPrice] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [priceError, setPriceError] = useState('');
    const [quantityValueError, setQuantityValueError] = useState('');

    const handleAddGas = (gas_id) => {
        let priceErrorText = '';
        let quantityErrorText = '';

        if (price === '') {
            priceErrorText = 'Введіть вартість'
        } else if (!numPattern.test(price)) {
            priceErrorText = 'Неправильна вартість'
        }
        if (quantityValue === '') {
            quantityErrorText = 'Введіть кількість'
        } else if (quantityValue > gas.quantity) {
            quantityErrorText = 'Такої кількості товару немає'
        } else if (!numPattern.test(price)) {
            quantityErrorText = 'Неправильна кількість'
        }
        setPriceError(priceErrorText)
        setQuantityValueError(quantityErrorText)

        if (priceErrorText === '' && quantityErrorText === '') {
            const fal = {
                price: price,
                fal_id: gas_id,
                quantity: quantityValue
            };

            setFalList([...falList, fal]);
            setPrice('')
            setQuantityValue('')
            setIsEdit(false)
        }
    };

    const handleCancel = () => {
        setPrice('')
        setQuantityValue('')
        setIsEdit(false);
    };

    return (
        <div className={styles.gasInfoContainer}
        >
            <div className={styles.name}>
                <p>{gas.name}</p>
            </div>
            <div className={styles.available}>
                <p>{gas.quantity}</p>
            </div>
            <div className={styles.buyingGasContainer}
            >
                <input className={`${styles.inputPrice} ${priceError && styles.error}`}
                       disabled={!isEdit}
                       placeholder='Вартість'
                       value={price}
                       onChange={e => setPrice(e.target.value)}
                />
                <input className={`${styles.inputQuantity} ${quantityValueError && styles.error}`}
                       disabled={!isEdit}
                       placeholder='Кількість'
                       value={quantityValue}
                       onChange={e => setQuantityValue(e.target.value)}
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
                                type='button'
                                onClick={() => handleAddGas(gas.id)}
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
            </div>
        </div>
    );
};

export default GasItem;