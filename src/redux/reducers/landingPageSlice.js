import { createSlice } from "@reduxjs/toolkit";

export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: {
    show: false,
    content: null
  },

  reducers: {
    // Define el contenido del modal y lo muestra.
    setModal: (state, action) => {
        state.show = true;
        state.content = action.payload;
    },
    unsetModal: (state) => {
        state.show = false;
    }
  }
});

export const { setModal, unsetModal } = landingPageSlice.actions;
export default landingPageSlice.reducer;
