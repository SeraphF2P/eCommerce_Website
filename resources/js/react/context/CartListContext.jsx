import React, { useContext } from "react";
import { useLocalStorage } from "../hooks/useStorage";

const CartItems = React.createContext();

export function useCartItemsState() {
    return useContext(CartItems);
}
export default ({ children }) => {
    const [cartItem, setCartItem, clearCart] = useLocalStorage("cart", []);
    return (
        <>
            <CartItems.Provider
                value={{ cartItem, setCartItem, clearCart }}
            >
                {children}
            </CartItems.Provider>
        </>
    );
};
