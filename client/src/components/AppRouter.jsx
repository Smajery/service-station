import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {adminRoutes, attendantRoutes, managerRoutes, driverRoutes, publicRoutes, authRoutes} from 'routes';

const AppRouter = () => {
    const {user} = useSelector(state => state.authReducer)

    if (Object.keys(user).length !== 0) {
        switch (user.role) {
            case 'ADMIN':
                return (
                    <Routes>
                        {adminRoutes.map((admin) => (
                            <Route
                                key={admin.path}
                                path={admin.path}
                                element={<admin.component />}
                            />
                        ))}
                    </Routes>
                );
            case 'ATTENDANT':
                return (
                    <Routes>
                        {attendantRoutes.map((attendant) => (
                            <Route
                                key={attendant.path}
                                path={attendant.path}
                                element={<attendant.component />}
                            />
                        ))}
                    </Routes>
                );
            case 'MANAGER':
                return (
                    <Routes>
                        {managerRoutes.map((manager) => (
                            <Route
                                key={manager.path}
                                path={manager.path}
                                element={<manager.component />}
                            />
                        ))}
                    </Routes>
                );
            case 'DRIVER':
                return (
                    <Routes>
                        {driverRoutes.map((driver) => (
                            <Route
                                key={driver.path}
                                path={driver.path}
                                element={<driver.component />}
                            />
                        ))}
                    </Routes>
                );
            default:
                return (
                    <Routes>
                        {authRoutes.map((user) => (
                            <Route
                                key={user.path}
                                path={user.path}
                                element={<user.component />}
                            />
                        ))}
                    </Routes>
                );
        }
    } else {
        return (
            <Routes>
                {publicRoutes.map((user) => (
                    <Route
                        key={user.path}
                        path={user.path}
                        element={<user.component />}
                    />
                ))}
            </Routes>
        );
    }
};

export default AppRouter;
