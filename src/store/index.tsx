import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import theme, { setTheme } from "./features/theme";
import auth, { setAuth } from "./features/auth";
import count, { setCountDecrease, setCountIncrease } from "./features/count";
import product, {
  addProduct,
  removeProduct,
  resetProducts,
  deleteLastProduct,
} from "./features/product";

// Configuração do persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

// Combine reducers
const reducers = combineReducers({
  auth,
  theme,
  count,
  product,
});

// Persist reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure store
const store = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/PERSIST",
            "persist/REHYDRATE",
            "persist/REGISTER",
          ],
        },
      }),
  });
};

const persistor: Persistor = persistStore(store());

export default store();

export {
  store,
  persistor,
  setAuth,
  setTheme,
  addProduct,
  removeProduct,
  resetProducts,
  setCountDecrease,
  setCountIncrease,
  deleteLastProduct,
};
