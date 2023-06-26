import {format} from 'date-fns';
import {useState} from 'react';

import styles from './RoadMapItem.module.css';
import {getConsumption} from 'api/gas';
import {checkArr} from 'utils/check-arr';

const RoadMapItem = ({roadMap}) => {
    const [isShow, setIsShow] = useState(false);
    const [consumption, setConsumption] = useState([]);

    console.log(consumption);

    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    const handleShowConsumption = (tripId) => {
        getConsumption(tripId)
            .then(data => {
                setConsumption(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
        setIsShow(true);
    };

    return (
        <div className={`${styles.roadMapItemContainer} ${isShow && styles.show}`}>
            <div className={styles.roadMapItem}>
                <div className={styles.owner}>
                    <p>
                        {roadMap.driver}
                    </p>
                </div>
                <div className={styles.carType}>
                    <p>
                        {roadMap.license_plate}
                    </p>
                </div>
                <div className={styles.date}>
                    <p>
                        {getFormattedDate(roadMap.date)}
                    </p>
                </div>
                <div className={styles.address}>
                    <p>
                        {roadMap.destination_address}
                    </p>
                </div>
                <div className={styles.button}>
                    {isShow ? (
                        <button className={styles.showConsumptionBtn}
                                onClick={() => setIsShow(false)}
                        >
                            Сховати
                        </button>
                    ) : (
                        <button className={styles.showConsumptionBtn}
                                onClick={() => handleShowConsumption(roadMap.trip_id)}
                        >
                            Показати
                        </button>
                    )}
                </div>
            </div>
            {isShow && (
                <div className={styles.consumptionContainer}>
                    {checkArr(consumption) ? (
                        consumption.map((cons) => (
                            <div className={styles.consumption}>
                                <div>
                                    <p>
                                        {cons.fal_name}: {cons.quantity}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>
                                Витрати порожні
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RoadMapItem;