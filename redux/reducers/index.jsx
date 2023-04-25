import { combineReducers } from "redux";
import { cartSlice } from "./cart";
import { sidebarSlice } from "./sidebar";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { adminSlice } from "./admin";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["yourCart"],
};

const adminPersistConfig = {
  key: "admin",
  storage,
  whitelist: ["isAuthenticated"],
};

export const reducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  admin: persistReducer(adminPersistConfig, adminSlice.reducer),
  cart: persistReducer(cartPersistConfig, cartSlice.reducer),
});
