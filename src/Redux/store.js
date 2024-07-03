import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from "./SearchSlice.js";
import cartReducer from "./cartSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  search: searchReducer,
  cart: cartReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { persistor, store };
