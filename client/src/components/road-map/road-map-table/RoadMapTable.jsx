import styles from './RoadMapTable.module.css';
import {checkArr} from 'utils/check-arr';
import RoadMapItem from './road-map-item/RoadMapItem';

const RoadMapTable = ({roadMaps}) => {
    return (
        <table className={styles.roadMapTable}>
            <tbody>
            {checkArr(roadMaps) ? (
                roadMaps.map((roadMap) => (
                    <RoadMapItem roadMap={roadMap}
                                 key={roadMap.id}
                    />
                ))
            ) : (
                <tr className={styles.emptyTable}>
                    <td>
                        Список дорожніх карт порожній, спробуйте вибрати іншу дату
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default RoadMapTable;