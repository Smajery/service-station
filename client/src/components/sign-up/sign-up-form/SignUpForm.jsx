import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './SignUpForm.module.css';
import {emailPattern, passwordPattern} from 'utils/patterns';
import {ROUTE_SIGN_IN} from 'utils/routes';
import {registration} from '../../../api/auth';

const SignUpForm = () => {
    const navigate = useNavigate();

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
            registration(email, password)
                .then(data => {

                })
                .catch(e => {
                    console.error(e)
                    alert('Щось пішло не так')
                })
                .finally(() => {

                })

            navigate(ROUTE_SIGN_IN)
        }
    };


    return (
        <form onSubmit={handleSubmit}
              className={styles.signUpForm}
        >
            <h2>
                Реєстрація
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
            <button className={styles.signUpBtn}
                    type='submit'
            >
                Зареєструватися
            </button>
            <div className={styles.askSignInContainer}>
                <p className={styles.askSignInText}>
                    У вас є обліковий запис?
                    <span>
                        <a href='/'>
                            Увійти
                        </a>
                    </span>
                </p>
            </div>
        </form>
    );
};

export default SignUpForm;