import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className={styles.profilePage}>
            <div className={styles.content}>
                {(user && user.role !== null) ? (
                    <p>

                    </p>
                ) : (
                    <p>
                        Вам ще не видали роль, будь ласка, зверніться до адміністратора.
                    </p>
                )}
            </div>
        </div>
    );

};

export default Profile;