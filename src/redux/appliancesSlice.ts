import { createSlice } from "@reduxjs/toolkit";

export const appliancesSlice: any = createSlice({
  name: "appliances",
  initialState: {
    appliancesList: [],
    filteredList: [],
    filterTerm: 'Active',
    totalEntry: 0
  },
  reducers: {
    setAppliancesList: (state, action) => {
      state.appliancesList = action.payload;
    },
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
    setTotalEntry: (state, action) => {
        state.totalEntry = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    }
  },
});

export const {
    setAppliancesList, 
    setFilterTerm,
    setTotalEntry,
    setFilteredList
} = appliancesSlice.actions;

export const selectAppliancesList = (state: any) => state.appliances.appliancesList; 
export const selectFilterTerm = (state: any) => state.appliances.filterTerm; 
export const selectTotalEntry = (state: any) => state.appliances.totalEntry; 
export const selectFilteredList = (state: any) => state.appliances.filteredList; 

export default appliancesSlice.reducer;
