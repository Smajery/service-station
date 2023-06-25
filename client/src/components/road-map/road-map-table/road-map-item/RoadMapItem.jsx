import {format} from 'date-fns';

import styles from './RoadMapItem.module.css';

const RoadMapItem = ({roadMap}) => {

    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    return (
        <tr className={styles.roadMapItem}>
            <td className={styles.owner}>
                {roadMap.driver}
            </td>
            <td className={styles.carType}>
                {roadMap.license_plate}
            </td>
            <td className={styles.date}>
                {getFormattedDate(roadMap.date)}
            </td>
            <td className={styles.address}>
                {roadMap.destination_address}
            </td>
        </tr>
    );
};

export default RoadMapItem;