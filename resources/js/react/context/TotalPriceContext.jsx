import React, { useContext, useReducer } from "react";

const TotalPrice = React.createContext();

export function useTotalPriceState() {
    return useContext(TotalPrice);
}
function reduse(state, action) {
    switch (action.type) {
        case "increase": {
            return { totalPrice: state.totalPrice + action.payload.price };
        }
        case "dicrease": {
            return { totalPrice: state.totalPrice - action.payload.price };
        }
        case "remove": {
            return {
                totalPrice:
                    state.totalPrice +
                    action.payload.price * action.payload.numberOfItems,
            };
        }
    }
}
export default ({ children }) => {
    const [state, dispatch] = useReducer(reduse, { totalPrice: 0 });
    return (
        <>
            <TotalPrice.Provider value={{ state, dispatch }}>
                {children}
            </TotalPrice.Provider>
        </>
    );
};
