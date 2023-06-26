import React from 'react';
import {useSelector} from 'react-redux';

import styles from './Profile.module.css';

const Profile = () => {
    const {user} = useSelector(state => state.authReducer)

    return (
        <div className={styles.profilePage}>
            <div className={styles.content}>
                {(Object.keys(user).length !== 0 && user.role !== null) ? (
                    <p>
                        {user.role !== 'DRIVER' ? (
                            `${user.name}, ваша роль: ${user.role}`
                            ) : (
                            `Ласкаво просимо, ${user.name}`
                        )}
                    </p>
                ) : (
                    <p>
                        {user.name}, Вам ще не видали роль, будь ласка, зверніться до адміністратора.
                    </p>
                )}
            </div>
        </div>
    );

};

export default Profile;