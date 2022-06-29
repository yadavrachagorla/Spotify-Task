import { configureStore } from '@reduxjs/toolkit';
import playerReducer from "./player";
import authReducer from "./auth"

const store = configureStore({
    reducer: {
        player: playerReducer,
        auth: authReducer
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch