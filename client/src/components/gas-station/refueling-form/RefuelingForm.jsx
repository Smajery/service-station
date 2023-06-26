import {useState} from 'react';

import styles from './RefuelingForm.module.css';
import {checkArr} from 'utils/check-arr';
import GasItem from './gas-item/GasItem';
import {refueling} from '../../../api/gas-station';
import {format} from 'date-fns';

const RefuelingForm = ({users, roadMaps, gases}) => {
    const [isShow, setIsShow] = useState(false);
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState('');
    const [roadMap, setRoadMap] = useState('');
    const [roadMapError, setRoadMapError] = useState('');
    const [falList, setFalList] = useState([]);

    const todayDate = new Date();

    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    const handleSubmitRefueling = (e) => {
        e.preventDefault();

        let userErrorText = '';
        let roadMapErrorText = '';

        if (user === '') {
            userErrorText = 'Виберіть заправника';
        }
        if (roadMap === '') {
            roadMapErrorText = 'Виберіть дорожню карту';
        }
        setUserError(userErrorText);
        setRoadMapError(roadMapErrorText);

        if (userErrorText === '' && roadMapErrorText === '') {
            refueling(user, roadMap, getFormattedDate(todayDate), falList)
                .then(() => {
                    alert('Заправка пройшла успішно!');
                    setFalList([]);
                    setUser('');
                    setRoadMap('');
                })
                .catch(e => {
                    console.error(e);
                    alert('Щось пішло не так');
                });
        }
    };

    const handleCancelPurchase = (fal_id) => {
        const newFalList = falList.filter(fal => fal.fal_id !== fal_id);
        setFalList(newFalList);
    };

    return (
        <form className={styles.refuelingForm}
              onSubmit={handleSubmitRefueling}
        >
            <div className={styles.basketContainer}>
                <div className={styles.basket}>
                    <p>
                        Ваш кошик: {falList.length}
                    </p>
                    {falList.length > 0 && (
                        isShow ? (
                            <div className={styles.btnContainer}>
                                <button
                                    type='button'
                                    onClick={() => setIsShow(false)}
                                >
                                    Сховати
                                </button>
                                <button
                                    type='submit'
                                >
                                    Оплатити
                                </button>
                            </div>
                        ) : (
                            <div className={styles.btnContainer}>
                                <button
                                    type='button'
                                    onClick={() => setIsShow(true)}
                                >
                                    Показати
                                </button>
                                <button
                                    type='submit'
                                >
                                    Оплатити
                                </button>
                            </div>
                        )
                    )}
                </div>
                {isShow && (
                    <div className={styles.purchasesContainer}>
                        <div className={styles.purchasesTitle}>
                            <div className={styles.name}>
                                <p>
                                    Назва
                                </p>
                            </div>
                            <div className={styles.price}>
                                <p>
                                    Вартість
                                </p>
                            </div>
                            <div className={styles.quantity}>
                                <p>
                                    Кількість
                                </p>
                            </div>
                            <div className={styles.button}>
                            </div>
                        </div>
                        {checkArr(falList) && (
                            falList.map((fal) => (
                                <div key={fal.fal_id}
                                     className={styles.purchase}
                                >
                                    <div className={styles.name}>
                                        <p>
                                            {gases.find(gas => gas.id === fal.fal_id).name}
                                        </p>
                                    </div>
                                    <div className={styles.price}>
                                        <p>
                                            {fal.price}
                                        </p>
                                    </div>
                                    <div className={styles.quantity}>
                                        <p>
                                            {fal.quantity}
                                        </p>
                                    </div>
                                    <div className={styles.button}>
                                        <button className={styles.cancelPurchaseBtn}
                                                onClick={() => handleCancelPurchase(fal.fal_id)}
                                        >
                                            Скасувати
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor='selectAttendant'>
                    Ім'я заправника
                </label>
                <select id='selectAttendant'
                        className={`${userError && styles.error}`}
                        value={user}
                        onChange={e => setUser(e.target.value)}
                >
                    <option value=''>Виберіть</option>
                    {checkArr(users) && (
                        users.map((user) => (
                            <option value={user.id}
                                    key={user.id}
                            >
                                {user.name}
                            </option>
                        ))
                    )}
                </select>
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor='selectRoadMap'>
                    Дорожня карта
                </label>
                <select id='selectRoadMap'
                        className={`${roadMapError && styles.error}`}
                        value={roadMap}
                        onChange={e => setRoadMap(e.target.value)}
                >
                    <option value=''>Виберіть</option>
                    {checkArr(roadMaps) && (
                        roadMaps.map((roadMap) => (
                            <option value={roadMap.trip_id}
                                    key={roadMap.trip_id}
                            >
                                {`№${roadMap.trip_id}-${roadMap.driver}-${roadMap.license_plate}`}
                            </option>
                        ))
                    )}
                </select>
            </div>
            <div className={styles.gasListContainer}>
                <div className={styles.gasInfoTitle}>
                    <div className={styles.name}>
                        <p>Назва</p>
                    </div>
                    <div className={styles.available}>
                        <p>Доступно</p>
                    </div>
                    <div className={styles.price}>
                        <p>Вартість</p>
                    </div>
                    <div className={styles.quantity}>
                        <p>Кількість</p>
                    </div>
                    <div className={styles.button}>
                    </div>
                </div>
                {checkArr(gases) ? (
                    gases.map((gas) => (
                        <GasItem gas={gas}
                                 key={gas.id}
                                 setFalList={setFalList}
                                 falList={falList}
                        />
                    ))
                ) : (
                    <div>
                        <p>
                            Список ПММ порожній
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
};

export default RefuelingForm;