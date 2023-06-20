import {Route, Routes} from 'react-router-dom';

import {adminRoutes, attendantRoutes, managerRoutes, driverRoutes, userRoutes} from 'routes';

const AppRouter = () => {
    const role = '';

    switch (role) {
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
                    {userRoutes.map((user) => (
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