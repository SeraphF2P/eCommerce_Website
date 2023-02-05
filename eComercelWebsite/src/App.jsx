import React, { useState } from "react";

import Header from "./header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./main/HomePage";
import LoginPage, { Data } from "./signin/LoginPage";
import ProductInfoPage from "./main/ProductInfoPage";
import PageWrapper from "./signin/PageWrapper";
import SignUp from "./signin/SignUp";
import ListsContext from "./ListsContext";
export default function App() {
    const [isLogedIn, setIsLogedIn] = useState(false);
    return (
        <>
            <BrowserRouter>
                <ListsContext>
                    <Data>
                        <Routes>
                            {isLogedIn ? (
                                <Route element={<Header />}>
                                    <Route path="/" element={<HomePage />} />
                                    <Route
                                        path="/product/:id"
                                        element={<ProductInfoPage />}
                                    />
                                </Route>
                            ) : (
                                <Route element={<PageWrapper />}>
                                    <Route
                                        path="/"
                                        element={
                                            <LoginPage
                                                setIsLogedIn={setIsLogedIn}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/signup"
                                        element={<SignUp />}
                                    />
                                </Route>
                            )}
                        </Routes>
                    </Data>
                </ListsContext>
            </BrowserRouter>
        </>
    );
}
