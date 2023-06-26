import {useEffect, useState} from 'react';
import {format, subYears} from 'date-fns';

import styles from './GasStation.module.css';
import RefuelingForm from './refueling-form/RefuelingForm';
import {getAllUser} from 'api/user';
import {getAllRoadMap} from 'api/road-map';
import {getAllGas} from '../../api/gas';

const GasStation = () => {
    const [users, setUsers] = useState([])
    const [roadMaps, setRoadMaps] = useState([])
    const [gases, setGases] = useState([])

    const todayDate = new Date()
    const yearAgoDate = subYears(todayDate, 1);

    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    useEffect(() => {
        getAllUser()
            .then(data => {
                const attendantUsers = data.filter((data) => data.role === 'ATTENDANT')
                setUsers(attendantUsers)
            })
            .catch(e => {
                console.error(e)
                alert('Щось пішло не так')
            })
    }, [])

    useEffect(() => {
        const formattedTodayDate = getFormattedDate(todayDate)
        const formattedYearAgoDate = getFormattedDate(yearAgoDate)

        getAllRoadMap(formattedYearAgoDate, formattedTodayDate)
            .then(data => {
                setRoadMaps(data)
            })
            .catch(e => {
                console.error(e)
                alert('Щось пішло не так')
            })
    }, [])

    useEffect(() => {
        getAllGas()
            .then(data => {
                setGases(data)
            })
            .catch(e => {
                console.error(e)
                alert('Щось пішло не так')
            })
    }, [])

    return (
        <div className={styles.gasStationPage}>
            <div className={styles.content}>
                <div className={styles.refuelingFormContainer}>
                    <RefuelingForm users={users}
                                   roadMaps={roadMaps}
                                   gases={gases}
                    />
                </div>
            </div>
        </div>
    );
};

export default GasStation;