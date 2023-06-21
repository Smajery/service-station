import {checkAuth, login, registration} from 'api/auth';
import jwtDecode from 'jwt-decode';

const handleError = error => {
    console.error(error);
};

export const AuthActionCreator = {

    signIn: (email, password) => dispatch => {
        login(email, password)
            .then(
                data => {
                    const user  = jwtDecode(data.token)
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(user));
                }
            )
            .catch(
                error => handleError(error)
            );
    },

    signOut: () => dispatch => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (error) {
            handleError(error);
        }
    },

    // signUp: (email, password) => dispatch => {
    //     try {
    //         registration(email, password)
    //             .then(
    //                 () => {
    //                     console.log('Congrats with a registration!');
    //                 }
    //             )
    //             .catch(
    //                 error => handleError(error)
    //             );
    //     } catch (error) {
    //         handleError(error);
    //     }
    // },

    // checkAuth: () => dispatch => {
    //     try {
    //         checkAuth()
    //             .then(
    //                 data => {
    //                     console.log('Congrats!');
    //                     setStorageItem('token', data.token, localStorage);
    //                     setStorageItem('auth', 'true', localStorage);
    //                     dispatch(AuthActionCreator.setIsAuth(true));
    //                 }
    //             )
    //             .catch(
    //                 error => {
    //                     handleError(error);
    //                     dispatch(AuthActionCreator.signOut());
    //                 }
    //             );
    //     } catch (error) {
    //         handleError(error);
    //     }
    // }
};