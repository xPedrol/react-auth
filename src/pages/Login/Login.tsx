import styles from './Login.module.scss';
import {FaUserCircle} from "react-icons/fa";
import {RiKey2Fill} from "react-icons/ri";
import {AiFillFacebook, AiOutlineGoogle, AiOutlineTwitter} from "react-icons/ai";
import {useEffect, useState} from "react";

const Login = () => {
    const [bg, setBg] = useState<string | null>(null);
    useEffect(() => {
        const cardForm = document.querySelector(`.${styles.cardForm}`);
    }, []);
    useEffect(() => {
        const activeCardImage = document.querySelector(`.${styles.cardImage}.${styles.active}`);
        // console.warn(activeCardImage);
        // cardImage.animate()
        if (bg) {
            setTimeout(() => {
                let random = bg;
                while (random === bg) {
                    random = String(Math.floor(Math.random() * 4) + 1);
                }
                const currentCardImage = document.querySelector(`.${styles.cardImage}.bg${random}`);
                activeCardImage?.classList.remove(styles.active);
                currentCardImage?.classList.add(styles.active);
                setBg(random);
            }, 5000);
        } else {
            setBg('1');
        }
    }, [bg]);
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardForm}>
                    <form className={styles.form}>
                        <div className={styles.formInputDiv}>
                            <button type={'button'} className={styles.inputBtn}>
                                <FaUserCircle className={styles.inputBtnIcon}/>
                            </button>
                            <input className={styles.formInput} placeholder={'Type your login...'}/>
                        </div>
                        <div className={styles.formInputDiv}>
                            <button type={'button'} className={styles.inputBtn}>
                                <RiKey2Fill className={styles.inputBtnIcon}/>
                            </button>
                            <input type={'password'} className={styles.formInput}
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
                            <p className={styles.registerP}>Register</p>
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
                </div>
                <div id={'card-image'} className={styles.cardImageDiv}>
                    <img id={'card-image-1'} className={`${styles.cardImage} ${styles.active} bg1`}
                         src={'/loginBg1.jpg'}
                         alt={'loginBg1'}/>
                    <img id={'card-image-2'} className={`${styles.cardImage} bg4`} src={'/loginBg4.jpg'}
                         alt={'loginBg4'}/>
                    <img id={'card-image-3'} className={`${styles.cardImage} bg2`} src={'/loginBg2.jpg'}
                         alt={'loginBg2'}/>
                    <img id={'card-image-4'} className={`${styles.cardImage} bg3`} src={'/loginBg3.jpg'}
                         alt={'loginBg3'}/>
                </div>
            </div>
        </div>
    );
};

export default Login;