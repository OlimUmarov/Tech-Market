import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InititialProps = {
  showAlert: {
    message: string;
    color: "red" | "green";
  };
  isLoading: boolean;
  isToken: boolean
};

const initialState: InititialProps = {
  showAlert: {
    message: "",
    color: "red",
  },
  isLoading: false,
  isToken: false,
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
    changeToken: (state, action: PayloadAction<boolean>) => {
      state.isToken = action.payload;
    },
  },
});

export default contentSlice.reducer;
export const { changeAlert, changeLoading, changeToken } = contentSlice.actions;
