import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InititialProps = {
    language: string,
}

const initialState: InititialProps = {
    language: "en"
}

const contentSlice = createSlice({
    name: 'Redux',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
    }
}
})

export default contentSlice.reducer
export const { changeLanguage  } = contentSlice.actions