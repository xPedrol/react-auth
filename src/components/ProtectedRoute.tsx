import {Navigate} from "react-router-dom";
import {useAuth} from "../contexts/auth.context";

export const withAuth = (Component: any) => {
    return () => {
        const {user} = useAuth();
        if (user) {
            return <Component/>;
        } else {
            alert('Not authorized');
            return <Navigate replace to="/"/>;
        }
    };
};