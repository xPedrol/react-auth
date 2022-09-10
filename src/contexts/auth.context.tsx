import {createContext, useContext, useState} from "react";
import {TUser} from "../models/User.model";

type AuthContextProps = {
    user: TUser | null;
    login: (name: string, password: string) => TUser | null;
    logout: () => void;
    register: (newUser: TUser) => boolean;
}
const authContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [user, setUser] = useState<TUser | null>(null);
    const login = (name: string, password: string): TUser | null => {
        const user = users.find(user => user.name === name && user.comparePassword(password));
        if (user) {
            setUser(user);
            return user;
        } else {
            return null;
        }
    };
    const logout = () => {
        setUser(null);
    };
    const register = (newUser: TUser): boolean => {
        const registeredUser = users.find(user => user.email === newUser.email);
        if (registeredUser) {
            return false;
        }
        setUsers([...users, newUser]);
        setUser(newUser);
        return true;
    };
    return (
        <authContext.Provider value={{user, login, logout, register}}>
            {children}
        </authContext.Provider>
    );
};
export const useAuth = () => useContext(authContext);