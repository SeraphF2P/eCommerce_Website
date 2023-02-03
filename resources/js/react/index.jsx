import Footer from "./Footer";
import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./main/Main";
import Header from "./header/Header";
import DataProvider from "./DataProvider";
import Task from "./Task";

function App() {
    return (
        <React.StrictMode>
            <DataProvider>
                <Header />
                <Main />
                <Footer />
            </DataProvider>
        </React.StrictMode>
    );
}

createRoot(document.getElementById("root")).render(<App />);
