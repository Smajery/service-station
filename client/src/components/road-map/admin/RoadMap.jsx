import {useEffect, useState} from 'react';
import {format} from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './RoadMap.module.css';
import RoadMapTable from './road-map-table/RoadMapTable';
import {addRoadMap, getAllRoadMap} from 'api/road-map';
import {getAllCars} from 'api/car';
import {checkArr} from 'utils/check-arr';
import {getAllUser} from 'api/user';

const RoadMap = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [roadMaps, setRoadMaps] = useState([]);
    const [cars, setCars] = useState([]);
    const [users, setUsers] = useState([]);

    const [startDate, setStartDate] = useState(Date.now);
    const [endDate, setEndDate] = useState(Date.now);
    const maxDate = new Date();

    const [name, setName] = useState('');
    const [dateValue, setDateValue] = useState(Date.now);
    const [carType, setCarType] = useState('');
    const [address, setAddress] = useState('');

    const [nameError, setNameError] = useState('');
    const [carTypeError, setCarTypeError] = useState('');
    const [addressError, setAddressError] = useState('');

    const getFormattedDate = (date) => {
        return format(date, 'yyyy-MM-dd');
    };

    const handleCancel = () => {
        setName('');
        setCarType('');
        setAddress('');
        setIsEdit(false);
    };

    const handleDateValueChange = (date) => {
        setDateValue(date);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setName(selectedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let nameErrorText = '';
        let carTypeErrorText = '';
        let addressErrorText = '';

        if (name === '') {
            nameErrorText = 'Виберіть власника';
        }
        if (carType === '') {
            carTypeErrorText = 'Виберіть машину';
        }
        if (address === '') {
            addressErrorText = 'Введіть адресу';
        }
        setNameError(nameErrorText);
        setCarTypeError(carTypeErrorText);
        setAddressError(addressErrorText);

        if (nameErrorText === '' && carTypeErrorText === '' && addressErrorText === '') {
            const formattedDate = getFormattedDate(dateValue);
            const [userId, userName] = name.split('-');
            const nameId = userId
            const fullName = userName;

            addRoadMap(nameId, carType, formattedDate, address)
                .then(() => {
                    const newRoadMap = {
                        id: Date.now,
                        driver: fullName,
                        license_plate: carType,
                        date: formattedDate,
                        destination_address: address
                    };
                    setRoadMaps([...roadMaps, newRoadMap]);
                    handleCancel();
                })
                .catch(e => {
                    console.error(e);
                    alert('Щось пішло не так');
                });
        }

    };

    useEffect(() => {
        const formattedStartDate = getFormattedDate(startDate);
        const formattedEndDate = getFormattedDate(endDate);

        getAllRoadMap(formattedStartDate, formattedEndDate)
            .then(data => {
                setRoadMaps(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, [startDate, endDate]);

    useEffect(() => {
        getAllCars()
            .then(data => {
                setCars(data);
            })
            .catch(e => {
                console.log(e);
                alert('Щось пішло не так');
            });
    }, []);

    useEffect(() => {
        getAllUser()
            .then(data => {
                setUsers(data);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    return (
        <div className={styles.roadMapPage}>
            <div className={styles.content}>
                <div className={styles.roadMapTableContainer}>
                    <div className={styles.datePickerContainer}>
                        <div className={styles.labelContainer}>
                            <label htmlFor='start'>Дата початку:</label>
                            <DatePicker selected={startDate}
                                        onChange={handleStartDateChange}
                                        dateFormat='yyyy-MM-dd'
                                        maxDate={maxDate}

                            />
                        </div>
                        <div className={styles.labelContainer}>
                            <label htmlFor='end'>Дата закінчення:</label>
                            <DatePicker selected={endDate}
                                        onChange={handleEndDateChange}
                                        dateFormat='yyyy-MM-dd'
                                        maxDate={maxDate}
                            />
                        </div>
                    </div>
                    <div className={styles.roadMapTableTitle}>
                        <div className={styles.owner}>
                            <p>Власник</p>
                        </div>
                        <div className={styles.carType}>
                            <p>Номер машини</p>
                        </div>
                        <div className={styles.date}>
                            <p>Дата</p>
                        </div>
                        <div className={styles.address}>
                            <p>Адреса призначення</p>
                        </div>
                        <div className={styles.button}>
                        </div>
                    </div>
                    <form className={styles.addRoadMapForm}
                          onSubmit={handleSubmit}
                    >
                        <select className={`${styles.selectOwner} ${nameError !== '' && styles.error}`}
                                value={name}
                                onChange={handleSelectChange}
                                disabled={!isEdit}
                        >
                            <option value=''>Виберіть</option>
                            {checkArr(users) && (
                                users.filter(user => user.role === 'DRIVER').map((user) => (
                                    <option value={`${user.id}-${user.name}`}
                                            key={user.id}
                                    >
                                        {user.name}
                                    </option>
                                ))
                            )}
                        </select>
                        <select className={`${styles.selectCarType} ${carTypeError !== '' && styles.error}`}
                                value={carType}
                                onChange={e => setCarType(e.target.value)}
                                disabled={!isEdit}
                        >
                            <option value=''>Виберіть</option>
                            {checkArr(cars) && (
                                cars.map((car, index) => (
                                    <option value={car.license_plate}
                                            key={index}
                                    >
                                        {car.license_plate}
                                    </option>
                                ))
                            )}
                        </select>
                        <div className={styles.inputDateContainer}>
                            <DatePicker selected={dateValue}
                                        onChange={handleDateValueChange}
                                        dateFormat='yyyy-MM-dd'
                                        disabled
                                        maxDate={maxDate}
                            />
                        </div>
                        <input className={`${styles.inputAddress} ${addressError !== '' && styles.error}`}
                               disabled={!isEdit}
                               value={address}
                               onChange={e => setAddress(e.target.value)}
                               placeholder='Адреса'
                        />
                        {isEdit ? (
                            <div className={styles.btnContainer}>
                                <button className={styles.cancelBtn}
                                        type='button'
                                        onClick={handleCancel}
                                >
                                    x
                                </button>
                                <button className={styles.confirmBtn}
                                        type='submit'
                                >
                                    ✓
                                </button>
                            </div>

                        ) : (
                            <div className={styles.btnContainer}>
                                <button className={styles.addGasBtn}
                                        type='button'
                                        onClick={() => setIsEdit(true)}
                                >
                                    Додати
                                </button>
                            </div>
                        )}
                    </form>
                    <RoadMapTable roadMaps={roadMaps} />
                </div>
            </div>
        </div>
    );
};

export default RoadMap;