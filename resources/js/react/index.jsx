import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./pages/header/Header";
import HomePage from "./pages/main/HomePage";
import ProductInfoPage from "./pages/main/ProductInfoPage";
import RegesterPage from "./pages/signin/RegesterPage";
import CartListContext from "./context/CartListContext";
import WishListContext from "./context/WishListContext";
import Access_denied from "./pages/Access_denied";
import NotFound from "./pages/NotFound";
import TotalPriceContext from "./context/TotalPriceContext";
import CheckOut from "./pages/main/CheckOut";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <>
            <BrowserRouter>
                <CartListContext>
                    <WishListContext>
                        <TotalPriceContext>
                            <AnimatePresence>
                                <Routes>
                                    <>
                                        <Route element={<Header />}>
                                            <Route
                                                path="/homepage"
                                                element={<HomePage />}
                                            />
                                        </Route>
                                        <Route
                                            path="/product/:id"
                                            element={<ProductInfoPage />}
                                        />
                                    </>
                                    <Route
                                        path="/"
                                        element={<RegesterPage />}
                                    />
                                    <Route
                                        path="/CheckOut"
                                        element={<CheckOut />}
                                    />
                                    <Route
                                        path="/access-denied"
                                        element={<Access_denied />}
                                    />
                                    <Route path="/*" element={<NotFound />} />
                                </Routes>
                            </AnimatePresence>
                        </TotalPriceContext>
                    </WishListContext>
                </CartListContext>
            </BrowserRouter>
        </>
    );
}

createRoot(document.getElementById("root")).render(<App />);
