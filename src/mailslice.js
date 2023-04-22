import { createSlice } from "@reduxjs/toolkit";
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    createfolderIsOpen: false,
  },
  reducers: {
    openCreateFolder: (state) => {
      state.createfolderIsOpen = !state.createfolderIsOpen;
    },
    closeCreateFolder: (state) => {
      state.createfolderIsOpen = !state.createfolderIsOpen;
    },
  },
});

export const { openCreateFolder, closeCreateFolder } = mailSlice.actions;
export const checkCreatefolderIsOpen = (state) => state.mail.createfolderIsOpen;

export default mailSlice.reducer;
