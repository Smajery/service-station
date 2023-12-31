import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useActions} from 'hooks/UseActions';
import jwtDecode from 'jwt-decode';

import styles from './SignInForm.module.css';
import {emailPattern, passwordPattern} from 'utils/patterns';
import {ROUTE_PROFILE} from 'utils/routes';
import {login} from 'api/auth';

const SignInForm = () => {
    const navigate = useNavigate();
    const {setUser} = useActions()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        let emailErrorText = '';
        if (emailInput === '') {
            emailErrorText = 'Введіть електронну пошту';
        } else if (!emailPattern.test(emailInput)) {
            emailErrorText = 'Неправильна електронна пошта';
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
            passwordErrorText = 'Введіть пароль';
        } else if (!passwordPattern.test(passwordInput)) {
            passwordErrorText = 'Невірний пароль';
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
            emailErrorText = 'Введіть електронну пошту';
        } else if (!emailPattern.test(email)) {
            emailErrorText = 'Неправильна електронна пошта';
        }
        if (password === '') {
            passwordErrorText = 'Введіть пароль';
        } else if (!passwordPattern.test(password)) {
            passwordErrorText = 'Невірний пароль';
        }

        setEmailError(emailErrorText);
        setPasswordError(passwordErrorText);

        if (emailErrorText === '' && passwordErrorText === '') {
            login(email, password)
                .then(data => {
                    const user = jwtDecode(data.token);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(user));
                    setUser(user)
                    navigate(ROUTE_PROFILE)
                })
                .catch(e => {
                    console.error(e)
                    alert('Неправильна електронна пошта або пароль')
                })
        }
    };


    return (
        <form onSubmit={handleSubmit}
              className={styles.signInForm}
        >
            <h2>
                Вхід
            </h2>
            <input type='text'
                   placeholder='Е-пошта'
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
                   placeholder='Пароль'
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
            <button className={styles.signInBtn}
                    type='submit'
            >
                Увійти
            </button>
            <div className={styles.askSignUpContainer}>
                <p className={styles.askSignUpText}>
                    Немає облікового запису?
                    <span>
                        <a href='/sign-up'>
                            Зареєструватися
                        </a>
                    </span>
                </p>
            </div>
        </form>
    );
};

export default SignInForm;