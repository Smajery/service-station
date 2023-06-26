import styles from './RoadMapTable.module.css';
import {checkArr} from 'utils/check-arr';
import RoadMapItem from './road-map-item/RoadMapItem';

const RoadMapTable = ({roadMaps}) => {
    return (
        <div className={styles.roadMapTable}>
            <div>
                {checkArr(roadMaps) ? (
                    roadMaps.map((roadMap, index) => (
                        <RoadMapItem roadMap={roadMap}
                                     key={index}
                        />
                    ))
                ) : (
                    <div className={styles.emptyTable}>
                        <div>
                            <p>
                                Список дорожніх карт порожній, спробуйте вибрати іншу дату
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoadMapTable;