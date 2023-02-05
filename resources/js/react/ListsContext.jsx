import React, { useContext } from "react";
import { useLocalStorage } from "../../../my/wds_hooks/useStorage";

const Favitems = React.createContext();
const FavitemsAdd = React.createContext();
const FavitemsRemove = React.createContext();

const CartItems = React.createContext();
const CartItemsAdd = React.createContext();
const CartItemsRemove = React.createContext();

export function useFavItemsState() {
    const setFavItem = useContext(FavitemsAdd);
    const removeFavItem = useContext(FavitemsRemove);
    const favItem = useContext(Favitems);
    return { favItem, setFavItem, removeFavItem };
}
export function useCartItemsState() {
    const setCartItem = useContext(CartItemsAdd);
    const removeCartItem = useContext(CartItemsRemove);
    const cartItem = useContext(CartItems);
    return { cartItem, setCartItem, removeCartItem };
}
export default ({ children }) => {
    const [favItem, setFavItem, remove] = useLocalStorage("fav", []);
    const [cartItem, setCartItem, removeFromCart] = useLocalStorage("cart", []);
    return (
        <>
            <Favitems.Provider value={favItem}>
                <FavitemsAdd.Provider value={setFavItem}>
                    <FavitemsRemove.Provider value={remove}>
                        <CartItems.Provider value={cartItem}>
                            <CartItemsAdd.Provider value={setCartItem}>
                                <CartItemsRemove.Provider
                                    value={removeFromCart}
                                >
                                    {children}
                                </CartItemsRemove.Provider>
                            </CartItemsAdd.Provider>
                        </CartItems.Provider>
                    </FavitemsRemove.Provider>
                </FavitemsAdd.Provider>
            </Favitems.Provider>
        </>
    );
};
