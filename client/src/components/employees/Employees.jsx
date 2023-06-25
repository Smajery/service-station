import {useEffect, useState} from 'react';

import styles from './Employees.module.css';
import EmployeesTable from './employees-table/EmployeesTable';
import {getAllUser} from 'api/user';

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllUser()
            .then(data => {
                setEmployees(data)
            })
            .catch(e => {
                console.error(e)
                alert('Щось пішло не так');
            })
    }, [])
    return (
        <div className={styles.employeesPage}>
            <div className={styles.content}>
                <div className={styles.employeesTableContainer}>
                    <EmployeesTable employees={employees} />
                </div>
            </div>
        </div>
    );
};

export default Employees;