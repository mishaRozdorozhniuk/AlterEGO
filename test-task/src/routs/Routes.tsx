import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Protected from "./PrivateRoute";
import {useSelector} from "react-redux";
import {IRootState} from "../redux/store";

export const ReactRouters = () => {
    const isAuth = useSelector<IRootState, boolean>((state) => state)

    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/profile" element={
                        <Protected isSignedIn={isAuth}>
                            <Profile />
                        </Protected>
                    } />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </BrowserRouter>
    );
};

