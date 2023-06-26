import {useSelector} from 'react-redux';

import AdminRoadMap from 'components/road-map/admin/RoadMap';
import DriverRoadMap from 'components/road-map/driver/RoadMap';

const RoadMapPage = () => {
    const {user} = useSelector(state => state.authReducer);

    if (user) {
        switch (user.role) {
            case 'ADMIN':
                return <AdminRoadMap />;
            case 'DRIVER':
                return <DriverRoadMap />;
        }
    } else {
        return (
            <div>
                <p>
                    Щось пішло не так, будь ласка, зверніться до адміністратора
                </p>
            </div>
        );
    }
};

export default RoadMapPage;