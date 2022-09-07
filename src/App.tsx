import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path={'/'} element={<Dashboard/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
