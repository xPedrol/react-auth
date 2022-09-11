import {createContext, useContext, useEffect, useState} from "react";
import {TUser, User} from "../models/User.model";

type AuthContextProps = {
    user: TUser | null;
    login: (name: string, password: string) => TUser | null;
    logout: () => void;
    register: (newUser: TUser) => boolean;
    isLoggedIn: () => boolean;
}
const authContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [user, setUser] = useState<TUser | null>(null);
    const isLoggedIn = () => {
        const sessionUser = sessionStorage.getItem('user');
        return (sessionUser && sessionUser !== '') || !!user;
    };
    const login = (name: string, password: string): TUser | null => {
        const user = users.find(item => {
            console.warn(item.name, name, item.name === name, item.comparePassword(password));
            return item.name === name && item.comparePassword(password);
        });
        if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            return user;
        } else {
            return null;
        }
    };
    const logout = () => {
        sessionStorage.removeItem('user');
        setUser(null);
    };
    const register = (newUser: TUser): boolean => {
        const registeredUser = users.find(user => user.email === newUser.email);
        if (registeredUser) {
            return false;
        }
        const newUsers = [...users, newUser];
        sessionStorage.setItem('users', JSON.stringify(newUsers));
        setUsers(newUsers);
        return true;
    };
    useEffect(() => {
        let user = sessionStorage.getItem('user');
        if (user && user !== '') {
            const newUser = JSON.parse(user);
            console.log('logadooo');
            setUser(new User(newUser));
        }

        let users = sessionStorage.getItem('users');
        if (users && users !== '') {
            let newUsers: any[] = JSON.parse(users);
            newUsers = newUsers.map(item => new User(item));
            setUsers(newUsers);
        }
    }, []);
    return (
        <authContext.Provider value={{user, login, logout, register, isLoggedIn}}>
            {children}
        </authContext.Provider>
    );
};
export const useAuth = () => useContext(authContext);