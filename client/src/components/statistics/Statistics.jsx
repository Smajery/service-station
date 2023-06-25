import {useEffect, useState} from 'react';
import {format} from 'date-fns';

import styles from './Statistics.module.css';
import {getStatistics} from 'api/statistics';

const Statistics = () => {
    const [statistics, setStatistics] = useState({});

    const getFormattedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'yyyy-MM-dd');
    };

    useEffect(() => {
        getStatistics()
            .then(data => {
                setStatistics(data[0]);
                console.log(data[0]);
            })
            .catch(e => {
                console.error(e);
                alert('Щось пішло не так');
            });
    }, []);

    return (
        <div className={styles.statisticsPage}>
            <div className={styles.content}>
                {Object.keys(statistics).length > 0 ? (
                    <div className={styles.statisticsContainer}>
                        <div className={styles.statisticsTitleContainer}>
                            <p>Статистика</p>
                        </div>
                        <div className={styles.invoiceDateContainer}>
                            <p>Дата останнього рахунку:</p>
                            <p>{getFormattedDate(statistics.latest_invoice_date)}</p>
                        </div>
                        <div className={styles.popularFuelContainer}>
                            <p>Популярний вид палива:</p>
                            <p>{statistics.popular_fuel_type}</p>
                        </div>
                        <div className={styles.resentTripsContainer}>
                            <p>Кількість останніх поїздок:</p>
                            <p>{statistics.recent_trips_count}</p>
                        </div>
                        <div className={styles.totalCarsContainer}>
                            <p>Загальна кількість автомобілів:</p>
                            <p>{statistics.total_cars}</p>
                        </div>
                        <div className={styles.totalInvoicesContainer}>
                            <p>Загальна кількість рахунків:</p>
                            <p>{statistics.total_invoices}</p>
                        </div>
                        <div className={styles.totalTripsContainer}>
                            <p>Загальна кількість поїздок:</p>
                            <p>{statistics.total_trips}</p>
                        </div>
                    </div>
                ) : (
                    <div className={styles.statisticsContainer}>
                        <div className={styles.statisticsTitleContainer}>
                            <p>Статистика порожня</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Statistics;