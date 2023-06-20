import {
    ROUTE_CARS,
    ROUTE_EMPLOYEES,
    ROUTE_EXPENSES,
    ROUTE_FUELS,
    ROUTE_INVOICES,
    ROUTE_REFUELING,
    ROUTE_ROAD,
    ROUTE_SIGN_IN,
    ROUTE_STATISTICS,
    ROUTE_SUPPLIERS
} from 'utils/paths';

import FuelsPage from 'pages/fuels/Fuels';
import EmployeesPage from 'pages/employees/Employees';
import RoadPage from 'pages/road/Road';
import StatisticsPage from 'pages/statistics/Statistics';
import RefuelingPage from '../pages/refueling/Refueling';
import CarsPage from '../pages/cars/Cars';
import InvoicesPage from '../pages/invoices/Invoices';
import SuppliersPage from '../pages/suppliers/Suppliers';
import ExpensesPage from '../pages/expenses/Expenses';
import SignInPage from '../pages/sign-in/SignIn';

export const adminRoutes = [
    {path: ROUTE_FUELS, component: FuelsPage},
    {path: ROUTE_EMPLOYEES, component: EmployeesPage},
    {path: ROUTE_ROAD, component: RoadPage},
    {path: ROUTE_STATISTICS, component: StatisticsPage}
];

export const attendantRoutes = [
    {path: ROUTE_REFUELING, component: RefuelingPage},
    {path: ROUTE_FUELS, component: FuelsPage},
    {path: ROUTE_CARS, component: CarsPage},
];

export const managerRoutes = [
    {path: ROUTE_INVOICES, component: InvoicesPage},
    {path: ROUTE_SUPPLIERS, component: SuppliersPage},

];

export const driverRoutes  = [
    {path: ROUTE_ROAD, component: RoadPage},
    {path: ROUTE_EXPENSES, component: ExpensesPage}
];

export const userRoutes = [
    {path: ROUTE_SIGN_IN, component: SignInPage}
]
