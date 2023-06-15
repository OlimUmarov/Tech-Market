import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InititialProps = {
  showAlert: {
    message: string;
    color: "red" | "green";
  };
  isLoading: boolean;
};

const initialState: InititialProps = {
  showAlert: {
    message: "",
    color: "red",
  },
  isLoading: false,
};

const contentSlice = createSlice({
  name: "Redux",
  initialState,
  reducers: {
    changeAlert: (
      state,
      action: PayloadAction<{ message: string; color: "red" | "green" }>
    ) => {
      state.showAlert = action.payload;
    },
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default contentSlice.reducer;
export const { changeAlert, changeLoading } = contentSlice.actions;
