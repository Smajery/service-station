import Main from './components/main/Main';
import {useEffect} from 'react';
import {useActions} from './hooks/UseActions';

const App = () => {
    const {setUser} = useActions()

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = localStorage.getItem('user');
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