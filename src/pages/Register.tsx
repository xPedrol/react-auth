import styles from "./Login/Login.module.scss";
import {FaUserCircle} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {AiFillFacebook, AiOutlineGoogle, AiOutlineTwitter} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {TUser, User} from "../models/User.model";
import {useAuth} from "../contexts/auth.context";

const Register = () => {
    const navigate = useNavigate();
    const {register: authRegister} = useAuth();
    const {register, handleSubmit} = useForm<TUser>();
    const onSubmit = (data: TUser) => {
        console.log(data);
        if (data) {
            const user: TUser = new User(data);
            if (authRegister(user)) {
                alert("Register success");
                navigate("/");
            } else {
                alert("Register failed");
            }
        }
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.formTitle}>Register</h1>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <FaUserCircle className={styles.inputBtnIcon}/>
                </button>
                <input {...register('name', {required: true})} className={styles.formInput}
                       placeholder={'Type your login...'}/>
            </div>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <MdEmail className={styles.inputBtnIcon}/>
                </button>
                <input {...register('email', {required: true})} type={'email'} className={styles.formInput}
                       placeholder={'Type your email...'}/>
            </div>
            <div className={styles.row}>
                <div className={styles.col6}>
                    <div className={styles.formInputDiv}>
                        <input {...register('password', {required: true})} type={'password'}
                               className={styles.formInput}
                               placeholder={'Type your password...'}/>
                    </div>
                </div>
                <div className={styles.col6}>
                    <div className={styles.formInputDiv}>
                        <input {...register('confirmPassword', {required: true})} type={'password'}
                               className={styles.formInput}
                               placeholder={'Confirm your password...'}/>
                    </div>
                </div>
            </div>
            <div className={styles.registerBtnDiv}>
                <button className={styles.loginBtn} type={'submit'}>Register</button>
            </div>
            <div className={styles.registerDiv}>
                <Link to={'/'}><p className={styles.registerP}>Login</p></Link>
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

export default Register;