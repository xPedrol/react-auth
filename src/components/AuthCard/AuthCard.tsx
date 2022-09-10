import styles from "../../pages/Login/Login.module.scss";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

export const AuthCard = () => {
    const [bg, setBg] = useState<string | null>(null);
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
                    <Outlet/>
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