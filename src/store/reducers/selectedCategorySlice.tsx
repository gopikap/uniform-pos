import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectedCategoryState {
  catId: number
}

const initialState: SelectedCategoryState = {
  catId: 0,
}

export const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<number>) => {
      state.catId = action.payload
    },
    clearCategory: (state) => {
      state.catId = 0
    },
    resetCategory: (state) => initialState
  },
})

// Action creators are generated for each case reducer function
export const { selectCategory ,clearCategory, resetCategory} = selectedCategorySlice.actions

export default selectedCategorySlice.reducer