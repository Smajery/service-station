import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import styles from './RoadMap.module.css';
import {getAllRoadMapDriver} from 'api/road-map';
import RoadMapTable from './road-map-table/RoadMapTable';

const RoadMap = () => {
    const {user} = useSelector(state => state.authReducer)
    const [roadMaps, setRoadMaps] = useState([])

    useEffect(() => {
        getAllRoadMapDriver(user)
            .then(data => {
                setRoadMaps(data)
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так')
            })
    }, [])
    return (
        <div className={styles.roadMapPage}>
            <div className={styles.content}>
                <div className={styles.roadMapTableContainer}>
                    <div className={styles.roadMapTableTitle}>
                        <div className={styles.owner}>
                            <p>Власник</p>
                        </div>
                        <div className={styles.carType}>
                            <p>Номер машини</p>
                        </div>
                        <div className={styles.date}>
                            <p>Дата</p>
                        </div>
                        <div className={styles.address}>
                            <p>Адреса призначення</p>
                        </div>
                        <div className={styles.button}>
                            <p>Витрати</p>
                        </div>
                    </div>
                    <RoadMapTable roadMaps={roadMaps} />
                </div>
            </div>
        </div>
    );
};

export default RoadMap;