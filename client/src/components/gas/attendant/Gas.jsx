import {useEffect, useState} from 'react';

import styles from './Gas.module.css';
import GasTable from './gas-table/GasTable';
import {getStock} from 'api/gas';

const Gas = () => {
    const [gases, setGases] = useState([]);

    useEffect(() => {
        getStock()
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
                    <GasTable gases={gases} setGases={setGases} />
                </div>
            </div>
        </div>
    );
};

export default Gas;