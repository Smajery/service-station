import styles from './GasTable.module.css';
import {checkArr} from 'utils/check-arr';
import GasItem from './gas-item/GasItem';

const GasTable = ({gases, setGases}) => {
    return (
        <table className={styles.gasTable}>
            <tbody>
            {checkArr(gases) ? (
                gases.map((gas) => (
                    <GasItem key={gas.id}
                             gas={gas}
                             setGases={setGases}
                    />
                ))
            ) : (
                <tr className={styles.emptyTable}>
                    <td>Список палива порожній</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default GasTable;