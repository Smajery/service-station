import {useEffect, useState} from 'react';

import styles from './Cars.module.css';
import {getTopConsumers} from 'api/car';
import {checkArr} from 'utils/check-arr';

const Cars = () => {
    const [topConsumers, setTopConsumers] = useState([]);

    useEffect(() => {
        getTopConsumers()
            .then(data => {
                const sortedData = data.sort((a, b) => b.quantity - a.quantity);
                setTopConsumers(sortedData);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    return (
        <div className={styles.carsPage}>
            <div className={styles.content}>
                <div className={styles.topConsumersContainer}>
                    <div className={styles.topConsumersTitle}>
                        <div className={styles.number}>
                            <p>
                                №
                            </p>
                        </div>
                        <div className={styles.license}>
                            <p>
                                Номер машини
                            </p>
                        </div>
                        <div className={styles.type}>
                            <p>
                                Тип машини
                            </p>
                        </div>
                        <div className={styles.name}>
                            <p>
                                Вид ПММ
                            </p>
                        </div>
                        <div className={styles.quantity}>
                            <p>
                                Кількість
                            </p>
                        </div>
                    </div>
                    {checkArr(topConsumers) ? (
                        topConsumers.map((topConsumer, index) => (
                            <div key={index}
                                 className={`${styles.topConsumer} ${(index + 1) % 2 !== 0 && styles.colored}`}
                            >
                                <div className={styles.number}>
                                    <p>
                                        {index + 1}
                                    </p>
                                </div>
                                <div className={styles.license} >
                                    <p>
                                        {topConsumer.license_plate}
                                    </p>
                                </div>
                                <div className={styles.type}>
                                    <p>
                                        {topConsumer.car_type}
                                    </p>
                                </div>
                                <div className={styles.name}>
                                    <p>
                                        {topConsumer.fuel}
                                    </p>
                                </div>
                                <div className={styles.quantity}>
                                    <p>
                                        {topConsumer.quantity}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>
                                Список покупців порожній
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cars;