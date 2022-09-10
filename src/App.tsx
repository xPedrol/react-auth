import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import {AuthCard} from "./components/AuthCard/AuthCard";
import {AuthProvider} from "./contexts/auth.context";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>
                        <Route path={'/'} element={<AuthCard/>}>
                            <Route path={'register'} element={<Register/>}/>
                            <Route path={'/'} element={<Login/>}/>
                        </Route>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
