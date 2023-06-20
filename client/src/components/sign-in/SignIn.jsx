import styles from './SignIn.module.css'
import SignInForm from './sign-in-form/SignInForm'

const SignIn = () => {
    return (
        <div className={styles.signInPage}>
            <div className={styles.content}>
                <SignInForm />
            </div>
        </div>
    );
};

export default SignIn;