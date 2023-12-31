import gasImg from 'static/icons/gas.svg';
import employeesImg from 'static/icons/employees.svg';
import roadMapImg from 'static/icons/road-map.svg';
import statisticsImg from 'static/icons/statistics.svg';
import gasStationImg from 'static/icons/gas-station.svg';
import carsImg from 'static/icons/cars.svg';
import invoicesImg from 'static/icons/invoices.svg';
import suppliersImg from 'static/icons/suppliers.svg';

export const adminPaths = [
    {title: 'ПММ', path: '/gas', icon: gasImg},
    {title: 'Співробітники', path: '/employees', icon: employeesImg},
    {title: 'Дорожні карти', path: '/road-map', icon: roadMapImg},
    {title: 'Статистика', path: '/statistics', icon: statisticsImg},
];

export const attendantPaths = [
    {title: 'Заправка', path: '/gas-station', icon: gasStationImg},
    {title: 'Залишки ПММ', path: '/gas', icon: gasImg},
    {title: 'Витрати', path: '/cars', icon: carsImg},
];

export const managerPaths = [
    {title: 'Накладні', path: '/invoices', icon: invoicesImg},
    {title: 'Постачальники', path: '/suppliers', icon: suppliersImg},
];

export const driverPaths = [
    {title: 'Дорожні карти', path: '/road-map', icon: roadMapImg},
];