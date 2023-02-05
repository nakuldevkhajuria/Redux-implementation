import { configureStore } from "@reduxjs/toolkit";
import counterHandler from './features/CounterSlice'
export default configureStore(
    {
        reducer: {
            counter:counterHandler
        }
    }
)