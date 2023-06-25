import styles from './EmployeesTable.module.css';
import {checkArr} from 'utils/check-arr';
import EmployeeItem from './employee-item/EmployeeItem';

const EmployeesTable = ({employees}) => {
    return (
        <table className={styles.employeesTable}>
            <thead>
            <tr className={styles.employeesTableTitle}>
                <th className={styles.name}>
                    ПІБ
                </th>
                <th className={styles.email}>
                    Е-пошта
                </th>
                <th className={styles.role}>
                    Роль
                </th>
                <th className={styles.button}>
                </th>
            </tr>
            </thead>
            <tbody>
            {checkArr(employees) ? (
                employees.map((employee) => (
                    <EmployeeItem key={employee.id}
                                  employee={employee}
                    />
                ))
            ) : (
                <tr className={styles.emptyTable}>
                    <td>Список співробітників порожній</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default EmployeesTable;