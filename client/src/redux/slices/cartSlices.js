import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(item => item.name === newItem.name)
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            }
            else {
                state.push({ ...newItem, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const itemNameToRemove = action.payload;
            const itemIndexToRemove = state.findIndex(item => item.name === itemNameToRemove);
            if (itemIndexToRemove !== -1) {
                state.splice(itemIndexToRemove, 1);
            }
        },
        desQuantity: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(item => item.name === newItem.name);
            if (existingItemIndex !== -1 && state[existingItemIndex].quantity > 0) {
                state[existingItemIndex].quantity -= 1;
            }

        },
        clearItems: (state) => {
            state.splice(0, state.length);
        }
    }
});
export const { addItem,removeItem, desQuantity, clearItems } = cartSlice.actions;
export default cartSlice.reducer;