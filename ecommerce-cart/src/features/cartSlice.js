import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        adjustQuantity(state, action) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});

export const { addItem, removeItem, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer;
