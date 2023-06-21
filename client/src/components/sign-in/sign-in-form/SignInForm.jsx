import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './SignInForm.module.css';
import {emailPattern, passwordPattern} from 'utils/patterns';
import {ROUTE_PROFILE} from 'utils/paths';
import {useActions} from '../../../hooks/UseActions';

const SignInForm = () => {
    const navigate = useNavigate();
    const {si} = useActions()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        let emailErrorText = '';
        if (emailInput === '') {
            emailErrorText = 'Email is empty';
        } else if (!emailPattern.test(emailInput)) {
            emailErrorText = 'Incorrect email';
        }

        setEmail(emailInput);
        setTimeout(() => {
            setEmailError(emailErrorText);
        }, 1000);
    };

    const handlePasswordChange = (e) => {
        const passwordInput = e.target.value;
        let passwordErrorText = '';
        if (passwordInput === '') {
            passwordErrorText = 'Password is empty';
        } else if (!passwordPattern.test(passwordInput)) {
            passwordErrorText = 'Incorrect password';
        }

        setPassword(passwordInput);
        setTimeout(() => {
            setPasswordError(passwordErrorText);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let emailErrorText = '';
        let passwordErrorText = '';

        if (email === '') {
            emailErrorText = 'Email is empty';
        } else if (!emailPattern.test(email)) {
            emailErrorText = 'Incorrect email';
        }
        if (password === '') {
            passwordErrorText = 'Password is empty';
        } else if (!passwordPattern.test(password)) {
            passwordErrorText = 'Incorrect password';
        }

        setEmailError(emailErrorText);
        setPasswordError(passwordErrorText);

        if (emailErrorText === '' && passwordErrorText === '') {
            navigate(ROUTE_PROFILE)
        }
    };


    return (
        <form onSubmit={handleSubmit}
            className={styles.signInForm}
        >
            <h2>
                Hello!
            </h2>
            <p>
                You must be signed in to use this app.
            </p>
            <input type='text'
                   placeholder='E-mail'
                   value={email}
                   onChange={handleEmailChange}
                   className={
                       `${styles.inputItem} ${emailError !== '' && styles.inputItem_error}`
                   }
            />
            {emailError !== '' &&
                <div className={styles.errorContainer}>
                    <p className={styles.errorText}>
                        {emailError}
                    </p>
                </div>
            }
            <input type='password'
                   placeholder='Password'
                   value={password}
                   onChange={handlePasswordChange}
                   className={
                       `${styles.inputItem} ${passwordError !== '' && styles.inputItem_error}`
                   }
            />
            {passwordError !== '' &&
                <div className={styles.errorContainer}>
                    <p className={styles.errorText}>
                        {passwordError}
                    </p>
                </div>
            }
            <button className={styles.signInBtn}>
                Sign in
            </button>
        </form>
    );
};

export default SignInForm;