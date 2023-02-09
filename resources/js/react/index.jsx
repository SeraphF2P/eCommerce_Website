import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header/Header";
// import "../../css/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./main/HomePage";
import LoginPage, { Data } from "./signin/LoginPage";
import ProductInfoPage from "./main/ProductInfoPage";
import PageWrapper from "./signin/PageWrapper";
import SignUp from "./signin/SignUp";
import ListsContext from "./ListsContext";
function App() {
    const [isLogedIn, setIsLogedIn] = useState(true);
    return (
        <>
            <BrowserRouter>
                <ListsContext>
                    <Data>
                        <Routes>
                            {isLogedIn ? (
                                <>
                                    <Route element={<Header />}>
                                        <Route
                                            path="/"
                                            element={<HomePage />}
                                        />
                                    </Route>
                                    <Route
                                        path="/product/:id"
                                        element={<ProductInfoPage />}
                                    />
                                </>
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

createRoot(document.getElementById("root")).render(<App />);
