import {useEffect, useState} from 'react';

import styles from './Gas.module.css';
import GasTable from './gas-table/GasTable';
import {addGas, getAllGas} from '../../api/gas';

const Gas = () => {
    const [gases, setGases] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const [nameError, setNameError] = useState('');
    const [typeError, setTypeError] = useState('');

    const handleCancel = () => {
        setName('')
        setType('')
        setIsEdit(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let nameErrorText = '';
        let typeErrorText = '';

        if (name === '') {
            nameErrorText = 'Введіть назву';
        } else if (gases.find((gas) => gas.name === name)) {
            nameErrorText = 'Така назва вже існує'
        }
        if (type === '') {
            typeErrorText = 'Введіть тип'
        }

        setNameError(nameErrorText)
        setTypeError(typeErrorText)

        if (nameErrorText === '' && typeErrorText === '') {
            addGas(name, type)
                .then(() => {
                    const gas = {
                        id: Date.now(),
                        name: name,
                        quantity: 0,
                        type: Number(type)
                    }
                    setGases([...gases, gas])
                })
                .catch(e => {
                    console.error(e)
                    alert('Щось пішло не так')
                });
        }
    };

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
    return (
        <div className={styles.gasPage}>
            <div className={styles.content}>
                <div className={styles.gasTableContainer}>
                    <div className={styles.gasTableTitle}>
                        <div className={styles.name}>
                            <p>Назва</p>
                        </div>
                        <div className={styles.quantity}>
                            <p>Кількість</p>
                        </div>
                        <div className={styles.type}>
                            <p>Тип</p>
                        </div>
                        <div className={styles.button}>
                        </div>
                    </div>
                    <form className={styles.addGasForm}
                          onSubmit={handleSubmit}
                    >
                        <input className={`${styles.inputName} ${nameError && styles.error}`}
                               disabled={!isEdit}
                               value={name}
                               placeholder='Назва'
                               onChange={e => setName(e.target.value)}
                        />
                        <input className={styles.inputQuantity}
                               disabled
                               placeholder='0'
                        />
                        <select onChange={e => setType(e.target.value)}
                                value={type}
                                className={`${styles.selectType} ${typeError && styles.error}`}
                                disabled={!isEdit}
                        >
                            <option value=''>Виберіть</option>
                            <option value='0'>Пальне</option>
                            <option value='1'>Мастильне</option>
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
                                <button className={styles.addGasBtn}
                                        type='button'
                                        onClick={() => setIsEdit(true)}
                                >
                                    Додати
                                </button>
                            </div>
                        )}
                    </form>
                    <GasTable gases={gases} setGases={setGases} />
                </div>
            </div>
        </div>
    );
};

export default Gas;