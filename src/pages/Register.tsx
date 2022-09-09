import styles from "./Login/Login.module.scss";
import {FaUserCircle} from "react-icons/fa";
import {RiKey2Fill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {AiFillFacebook, AiOutlineGoogle, AiOutlineTwitter} from "react-icons/ai";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <form className={styles.form}>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <FaUserCircle className={styles.inputBtnIcon}/>
                </button>
                <input className={styles.formInput} placeholder={'Type your login...'}/>
            </div>
            <div className={styles.formInputDiv}>
                <button type={'button'} className={styles.inputBtn}>
                    <MdEmail className={styles.inputBtnIcon}/>
                </button>
                <input type={'email'} className={styles.formInput} placeholder={'Type your email...'}/>
            </div>
            <div className={styles.row}>
                <div className={styles.col6}>
                    <div className={styles.formInputDiv}>
                        <input type={'password'} className={styles.formInput}
                               placeholder={'Type your password...'}/>
                    </div>
                </div>
                <div className={styles.col6}>
                    <div className={styles.formInputDiv}>
                        <input type={'password'} className={styles.formInput}
                               placeholder={'Confirm your password...'}/>
                    </div>
                </div>
            </div>
            <div className={styles.registerBtnDiv}>
                <button className={styles.loginBtn}>Register</button>
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