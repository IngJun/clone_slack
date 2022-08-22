import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChannelHome from "./pages/ChannelHome";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route exact path="/SignupPage" element={<SignupPage />} />
                <Route exact path="/channel" element={<ChannelHome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;