import Main from './components/main/Main';
import {useEffect} from 'react';
import {useActions} from './hooks/UseActions';

const App = () => {
    const {setUser} = useActions()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user)
        } else {
            setUser({})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Main />
        </>
    );
};

export default App;