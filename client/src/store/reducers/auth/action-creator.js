import {authSlice} from './AuthSlice';

export const AuthActionCreator = {
    setUser: (user) => dispatch => {
        dispatch(authSlice.actions.setUser(user));
    },

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