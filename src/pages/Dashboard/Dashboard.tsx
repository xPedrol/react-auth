import styles from './Dashboard.module.scss';
import {withAuth} from "../../components/ProtectedRoute";

const Dashboard = () => {
    return (
        <div className={styles.container}>Logado com sucesso</div>
    );
};

export default withAuth(Dashboard);