import {useState} from 'react';

import styles from './EmployeeItem.module.css';
import {updateEmployeeRole} from 'api/user';

const EmployeeItem = ({employee}) => {

    const [role, setRole] = useState(employee.role);
    const [isEdit, setIsEdit] = useState(false);

    const handleCancel = () => {
        setRole(employee.role)
        setIsEdit(false)
    }

    const handleUpdateRole = () => {
        updateEmployeeRole(employee.email, role)
            .then(() => {
                alert(`Роль для ${employee.name} було змінено на ${role}`)
            })
            .catch(e => {
                console.error(e)
                alert('Щось пішло не так')
            });
    };

    return (
        <tr className={styles.employeeItem}>
            <td className={styles.name}>
                {employee.name}
            </td>
            <td className={styles.email}
            >{employee.email}
            </td>
            <td className={styles.role}>
                <select onChange={e => setRole(e.target.role)}
                        value={role}
                        disabled={!isEdit}
                >
                    <option value=''>Виберіть</option>
                    <option value='ADMIN'>ADMIN</option>
                    <option value='ATTENDANT'>ATTENDANT</option>
                    <option value='MANAGER'>MANAGER</option>
                    <option value='DRIVER'>DRIVER</option>
                </select>
            </td>
            <td>
                {isEdit ? (
                    <div className={styles.btnContainer}>
                        <button className={styles.cancelBtn}
                                type='button'
                                onClick={handleCancel}
                        >
                            x
                        </button>
                        <button className={styles.confirmBtn}
                                onClick={handleUpdateRole}
                        >
                            ✓
                        </button>
                    </div>

                ) : (
                    <div className={styles.btnContainer}>
                        <button className={styles.updateRoleBtn}
                                type='button'
                                onClick={() => setIsEdit(true)}
                        >
                            Змінити
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default EmployeeItem;