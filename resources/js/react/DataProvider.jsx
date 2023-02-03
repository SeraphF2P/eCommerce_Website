import React, { useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import my from "../my/my";
import dataBase from "./dataBase.json";

const DataContext = React.createContext();
export function useData() {
    return useContext(DataContext);
}
const CurrentSong = React.createContext();
export function useCurrentSong() {
    return useContext(CurrentSong);
}
const CurrentSongUpdate = React.createContext();
export function useCurrentSongUpdate() {
    return useContext(CurrentSongUpdate);
}

const ThemeUpdate = React.createContext();
export function useThemeUpdate() {
    return useContext(ThemeUpdate);
}

export const themes = [
    {
        primary: "#0d0c0c",
        second: "#a21aeb",
        header: "rgba(255, 255, 255, 0.1)",
        card: "#0d0c0c",
        theme_btn: "#0d0c0c",
        text: "#fefefe",
        player: "#0d0c0c",
        player_icon: "#cacaca",
    },
    {
        primary: "#fefefe",
        second: "#f5b3b3",
        card: "#f5b3b3",
        theme_btn: "#fefefe",
        text: "#0d0c0c",
        player: "#fefefe",
        player_icon: "#cacaca",
    },
    {
        primary: "#fefefe",
        second: "#a21aeb",
        card: "#a21aeb",
        theme_btn: "#a21aeb",
        text: "#0d0c0c",
        player: "#0d0c0c",
    },
];

export default ({ children }) => {
    const [current_theme, setcurrent_theme] = useState(themes[0]);

    const data = useMemo(() => {
        return my.reArrangeDataIntoSmallerArrays(dataBase, 15);
    }, []);

    const [songIndexs, setsongIndexs] = useState({
        subArray_index: data[0][0].subArray_index,
        index: data[0][0].index,
    });
    return (
        <>
            <DataContext.Provider value={data}>
                <CurrentSong.Provider value={songIndexs}>
                    <CurrentSongUpdate.Provider value={setsongIndexs}>
                        <ThemeProvider theme={createTheme(current_theme)}>
                            <ThemeUpdate.Provider value={setcurrent_theme}>
                                {children}
                            </ThemeUpdate.Provider>
                        </ThemeProvider>
                    </CurrentSongUpdate.Provider>
                </CurrentSong.Provider>
            </DataContext.Provider>
        </>
    );
};
