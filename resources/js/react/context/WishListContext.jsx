import React, { useContext } from "react";
import { useLocalStorage } from "../hooks/useStorage";

const WishListItems = React.createContext();

export function useWishListItemsState() {
    return useContext(WishListItems);
}

export default ({ children }) => {
    const [wishListItems, setWishListItem, clearWishList] = useLocalStorage("wish", []);
    return (
        <>
            <WishListItems.Provider
                value={{ wishListItems, setWishListItem, clearWishList }}
            >
                {children}
            </WishListItems.Provider>
        </>
    );
};
