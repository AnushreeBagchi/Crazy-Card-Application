import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/reducer";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default function () {
    return configureStore({ 
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
        ]
        
    });
}
