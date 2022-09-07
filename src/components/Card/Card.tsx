import {ReactNode} from "react";
import styles from './Card.module.scss';

type TCard = {
    title: string,
    description?: string,
    children: ReactNode
}

const Card = ({title, description, children}: TCard) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1 className={styles.cardTitle}>{title}</h1>
            </div>
            <div className={styles.cardBody}>
                {children}
            </div>
            {/*{*/}
            {/*    description && <p>{description}</p>*/}
            {/*}*/}
        </div>
    );
};

export default Card;