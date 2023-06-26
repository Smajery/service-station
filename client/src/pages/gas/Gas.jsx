import {useSelector} from 'react-redux';

import AdminGas from 'components/gas/admin/Gas';
import AttendantGas from 'components/gas/attendant/Gas';

const GasPage = () => {
    const {user} = useSelector(state => state.authReducer)

    if (user) {
        switch (user.role) {
            case 'ADMIN':
                return (
                    <AdminGas />
                );
            case 'ATTENDANT':
                return (
                    <AttendantGas />
                )
        }
    } else {
        return (
            <div>
                Щось пішло не так, будь ласка, зверніться до адміністратора
            </div>
        );
    }
};

export default GasPage;