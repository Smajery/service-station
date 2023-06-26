import {
    ROUTE_CARS,
    ROUTE_EMPLOYEES,
    ROUTE_GAS,
    ROUTE_INVOICES,
    ROUTE_GAS_STATION,
    ROUTE_ROAD_MAP,
    ROUTE_SIGN_IN,
    ROUTE_SIGN_UP,
    ROUTE_STATISTICS,
    ROUTE_SUPPLIERS,
    ROUTE_PROFILE,
    ROUTE_ERROR, ROUTE_HOME
} from 'utils/routes';

import ProfilePage from 'pages/profile/Profile';
import EmployeesPage from 'pages/employees/Employees';
import RoadMapPage from 'pages/road-map/RoadMap';
import StatisticsPage from 'pages/statistics/Statistics';
import CarsPage from 'pages/cars/Cars';
import InvoicesPage from 'pages/invoices/Invoices';
import SuppliersPage from 'pages/suppliers/Suppliers';
import SignInPage from 'pages/sign-in/SignIn';
import SignUpPage from 'pages/sign-up/SignUp';
import ErrorPage from 'pages/error/Error';
import GasStationPage from 'pages/gas-station/GasStation';
import GasPage from 'pages/gas/Gas';

export const adminRoutes = [
    {path: ROUTE_HOME, component: ProfilePage},
    {path: ROUTE_PROFILE, component: ProfilePage},
    {path: ROUTE_GAS, component: GasPage},
    {path: ROUTE_EMPLOYEES, component: EmployeesPage},
    {path: ROUTE_ROAD_MAP, component: RoadMapPage},
    {path: ROUTE_STATISTICS, component: StatisticsPage},
    {path: ROUTE_ERROR, component: ErrorPage}
];

export const attendantRoutes = [
    {path: ROUTE_HOME, component: ProfilePage},
    {path: ROUTE_PROFILE, component: ProfilePage},
    {path: ROUTE_GAS_STATION, component: GasStationPage},
    {path: ROUTE_GAS, component: GasPage},
    {path: ROUTE_CARS, component: CarsPage},
    {path: ROUTE_ERROR, component: ErrorPage}
];

export const managerRoutes = [
    {path: ROUTE_HOME, component: ProfilePage},
    {path: ROUTE_PROFILE, component: ProfilePage},
    {path: ROUTE_INVOICES, component: InvoicesPage},
    {path: ROUTE_SUPPLIERS, component: SuppliersPage},
    {path: ROUTE_ERROR, component: ErrorPage}

];

export const driverRoutes = [
    {path: ROUTE_HOME, component: ProfilePage},
    {path: ROUTE_PROFILE, component: ProfilePage},
    {path: ROUTE_ROAD_MAP, component: RoadMapPage},
    {path: ROUTE_ERROR, component: ErrorPage}
];

export const authRoutes = [
    {path: ROUTE_HOME, component: ProfilePage},
    {path: ROUTE_PROFILE, component: ProfilePage},
    {path: ROUTE_ERROR, component: ErrorPage}
];

export const publicRoutes = [
    {path: ROUTE_HOME, component: SignInPage},
    {path: ROUTE_SIGN_IN, component: SignInPage},
    {path: ROUTE_SIGN_UP, component: SignUpPage},
    {path: ROUTE_ERROR, component: ErrorPage}
];
