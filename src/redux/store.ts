import { configureStore } from "@reduxjs/toolkit";

import utilityReducer from "./utilitySlice"
import appliancesReducer from "./appliancesSlice";

export default configureStore({
reducer: {
    utility: utilityReducer,
    appliances: appliancesReducer
}});