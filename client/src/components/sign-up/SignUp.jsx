import styles from './SignUp.module.css';
import SignUpForm from './sign-up-form/SignUpForm';

const SignUp = () => {
    return (
        <div className={styles.signUpPage}>
            <div className={styles.content}>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUp;