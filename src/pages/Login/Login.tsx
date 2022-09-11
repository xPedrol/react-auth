import styles from './Login.module.scss';
import {FaUserCircle} from "react-icons/fa";
import {RiKey2Fill} from "react-icons/ri";
import {AiFillFacebook, AiOutlineGoogle, AiOutlineTwitter} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/auth.context";
import {TUser} from "../../models/User.model";
import {useForm} from "react-hook-form";

const Login = () => {
    const navigate = useNavigate();
    const {login: authLogin} = useAuth();
    const {register, handleSubmit} = useForm<TUser>();
    const onSubmit = (data: TUser) => {
        if (data) {
            if (authLogin(data.name, data.password)) {
                alert("Login success");
                navigate("/dashboard");
            } else {
                alert("Login failed");
            }
        }
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formTitle}>Login</h1>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <FaUserCircle className={styles.inputBtnIcon}/>
                </button>
                <input {...register('name', {required: true})} className={styles.formInput}
                       placeholder={'Type your login...'}/>
            </div>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <RiKey2Fill className={styles.inputBtnIcon}/>
                </button>
                <input {...register('password', {required: true})} type={'password'} className={styles.formInput}
                       placeholder={'Type your password...'}/>
            </div>
            <div className={styles.rememberMeLogin}>
                <div className={styles.rememberMeDiv}>
                    <input id={'rememberMe'} type={'checkbox'} placeholder={'Type your password...'}/>
                    <label htmlFor={'rememberMe'}>Remember me</label>
                </div>
                <div className={styles.loginBtnDiv}>
                    <button className={styles.loginBtn}>Login</button>
                </div>
            </div>
            <div className={styles.registerDiv}>
                <Link to={'/register'}><p className={styles.registerP}>Register</p></Link>
                <p className={styles.forgotPasswordP}>Forgot password?</p>
            </div>
            <div className={styles.orDiv}>
                <p className={styles.orP}>or</p>
            </div>
            <div className={styles.moreLogins}>
                <div className={styles.moreLoginsBtnDiv}>
                    <button type={'button'} className={`${styles.moreLoginsInputBtn} ${styles.facebook}`}>
                        <AiFillFacebook className={styles.moreLoginsInputBtnIcon}/>
                    </button>
                    <button type={'button'} className={styles.facebookLoginBtn}>Login with facebook</button>
                </div>
                <div className={styles.moreLoginsBtnDiv}>
                    <button type={'button'} className={`${styles.moreLoginsInputBtn} ${styles.twitter}`}>
                        <AiOutlineTwitter className={styles.moreLoginsInputBtnIcon}/>
                    </button>
                    <button type={'button'} className={styles.twitterLoginBtn}>Login with twitter</button>
                </div>
                <div className={styles.moreLoginsBtnDiv}>
                    <button type={'button'} className={`${styles.moreLoginsInputBtn} ${styles.google}`}>
                        <AiOutlineGoogle className={styles.moreLoginsInputBtnIcon}/>
                    </button>
                    <button type={'button'} className={styles.googleLoginBtn}>Login with google</button>
                </div>
            </div>
        </form>
    );
};

export default Login;