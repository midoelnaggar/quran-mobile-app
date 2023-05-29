import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import currentReadingSlice from "./slices/currentReadingSlice";
import { pagesSlice } from "./slices/pagesSlice";
import separatorsSlice from "./slices/separatorsSlice";

const persistedReducer = persistReducer(
  {
    key: "ROOT_APP_KEY",
    version: 1,
    storage: AsyncStorage,
    whitelist: ["currentReading", "pages", "separators"],
  },
  combineReducers({
    currentReading: currentReadingSlice.reducer,
    pages: pagesSlice.reducer,
    separators: separatorsSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: { ignoreActions: [PERSIST] },
    });
  },
});

export const persistor = persistStore(store);

export const { changeSura, nextPage, prevPage } = currentReadingSlice.actions;
export const { stopLoading } = pagesSlice.actions;
export const { addSeparator, removeSeparator } = separatorsSlice.actions;
export { getPageThunk } from "./slices/pagesSlice";

export default store;
