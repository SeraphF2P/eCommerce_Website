<<<<<<< HEAD
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header/Header";
import "../../css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./main/HomePage";
import LoginPage, { Data } from "./signin/LoginPage";
import ProductInfoPage from "./main/ProductInfoPage";
import PageWrapper from "./signin/PageWrapper";
import SignUp from "./signin/SignUp";
import ListsContext from "./ListsContext";
function App() {
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
=======
import Footer from "./Footer";
import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./main/Main";
import Header from "./header/Header";
import DataProvider from "./DataProvider";

function App() {
    return (
        <React.StrictMode>
            <DataProvider>
                <Header />
                <Main />
                <Footer />
            </DataProvider>
        </React.StrictMode>
>>>>>>> f841895a11ebcd8bd414b7caf4fef57111d04b1e
    );
}

createRoot(document.getElementById("root")).render(<App />);
