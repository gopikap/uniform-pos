import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Discount {
  discountApplied:number;
  discountType: string
}

export interface DiscountAppliedState {
  discountApplied:number;
  discountType: string
}

const initialState: DiscountAppliedState = {
  discountApplied: 0,
  discountType:""
}

export const discountAppliedSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    applyDiscount: (state, action: PayloadAction<Discount>) => {
      state.discountApplied = action.payload.discountApplied;
      state.discountType = action.payload.discountType
    },   
    resetDiscount:(state) => initialState
  },
})

// Action creators are generated for each case reducer function
export const { applyDiscount,resetDiscount } = discountAppliedSlice.actions
//@ts-ignore
export const discountApplied = (state) => state.school;
export default discountAppliedSlice.reducer