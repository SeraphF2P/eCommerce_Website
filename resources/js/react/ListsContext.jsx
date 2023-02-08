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
            <Favitems.Provider key="context_1" value={favItem}>
                <FavitemsAdd.Provider key="context_2" value={setFavItem}>
                    <FavitemsRemove.Provider key="context_3" value={remove}>
                        <CartItems.Provider key="context_4" value={cartItem}>
                            <CartItemsAdd.Provider key="context_5" value={setCartItem}>
                                <CartItemsRemove.Provider
                                    key="context_6" value={removeFromCart}
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
