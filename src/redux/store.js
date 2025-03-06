import { configureStore,combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home";
import {PERSIST, persistReducer, persistStore, FLUSH,PAUSE, REHYDRATE, PURGE, REGISTER} from "redux-persist";   
import storage from "redux-persist/lib/storage";
import { api } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";


const persistConfig = {
    key: "root",
    storage,
  };

const rootReducer = combineReducers({
home:homeReducer,
[api.reducerPath]: api.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
reducer:persistedReducer,
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware)
})

setupListeners(store.dispatch)

export const persistor = persistStore(store);
