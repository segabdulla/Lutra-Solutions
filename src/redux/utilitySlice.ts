import { createSlice } from "@reduxjs/toolkit";

const utilitySlice = createSlice({
    name: "utility",
    initialState: {
      isSidemenuOpen: false
    },
    reducers: {
      setSidemenuOpen: (state, action) => {
        state.isSidemenuOpen = action.payload;
      }
    },
  });
  
  export const {
        setSidemenuOpen
  } = utilitySlice.actions;
  
  export const selectIsSidemenuOpen = (state: any) => state.utility.isSidemenuOpen; 
  
  export default utilitySlice.reducer;
  