import styles from './Dashboard.module.scss';
import {withAuth} from "../../components/ProtectedRoute";
import {useAuth} from "../../contexts/auth.context";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const {logout: authLogout} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        authLogout();
        navigate('/');
    };
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>Dashboard</h1>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.logoutBtn} onClick={logout}>Logout</button>
                    </div>
                </div>
            </header>
            <div className={styles.container}>
                <h3>
                    Logado com sucesso
                </h3>
            </div>
        </>
    );
};

export default withAuth(Dashboard);