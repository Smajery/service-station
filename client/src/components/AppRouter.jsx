import {Route, Routes} from 'react-router-dom';

import {adminRoutes, attendantRoutes, managerRoutes, driverRoutes} from 'routes';

const AppRouter = () => {
    const role = 'ATTENDANT';

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
                    {attendantRoutes.map((admin) => (
                        <Route
                            key={admin.path}
                            path={admin.path}
                            element={<admin.component />}
                        />
                    ))}
                </Routes>
            );
        case 'MANAGER':
            return (
                <Routes>
                    {managerRoutes.map((admin) => (
                        <Route
                            key={admin.path}
                            path={admin.path}
                            element={<admin.component />}
                        />
                    ))}
                </Routes>
            );
        case 'DRIVER':
            return (
                <Routes>
                    {driverRoutes.map((admin) => (
                        <Route
                            key={admin.path}
                            path={admin.path}
                            element={<admin.component />}
                        />
                    ))}
                </Routes>
            );
        default:
            return (
                <div>
                    Ви не авторизовані
                </div>
            );
    }
};

export default AppRouter;