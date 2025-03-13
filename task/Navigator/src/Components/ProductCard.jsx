import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });
const { addToCart, removeFromCart } = cartSlice.actions;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Gaming Chair", price: 599 },
    { id: 2, name: "Mechanical Keyboard", price: 199 },
    { id: 3, name: "Noise Cancelling Headphones", price: 299 },
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-2 rounded flex justify-between">
          <span>{product.name} - ₹{product.price}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-5 mt-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-2 rounded flex justify-between">
            <span>{item.name} - ₹{item.price}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <div className="max-w-3xl mx-auto p-5">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}
