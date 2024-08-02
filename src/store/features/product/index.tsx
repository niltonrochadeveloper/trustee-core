import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [
    { id: 1, name: "Produto 1", price: 100 },
    { id: 2, name: "Produto 2", price: 200 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteLastProduct: (state, action: PayloadAction<void>) => {
      if (state.items.length > 0) {
        state.items.pop();
      }
    },
    resetProducts: () => initialState,
  },
});

export const { addProduct, removeProduct, resetProducts, deleteLastProduct } =
  productSlice.actions;
export default productSlice.reducer;
