import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectedProductsState {
	productIds: Array<number>,
	currentlySelected: number
}

const initialState: SelectedProductsState = {
	productIds: [],
	currentlySelected:0
}

export const selectedProductSlice = createSlice({
	name: 'selectedProduct',
	initialState,
	reducers: {
		selectProduct: (state, action: PayloadAction<number>) => {
			const updatedIds = [...state.productIds]
			updatedIds.push(action.payload);
			state.productIds = updatedIds;
			state.currentlySelected = action.payload
		},		
		clearProducts:(state) => {
			state.productIds = [];	
			state.currentlySelected = 0;	
		},
		removeSelectedProduct: (state, action: PayloadAction<number>) => {
			const updatedIds = [...state.productIds]
			const filteredIdIndex = updatedIds.findIndex(x => x === action.payload);			
			updatedIds.splice(filteredIdIndex, 1)
			state.productIds = updatedIds;
			state.currentlySelected = 0;
		},
		resetProductData:(state) => initialState
	},
})

// Action creators are generated for each case reducer function
export const { selectProduct, clearProducts, removeSelectedProduct, resetProductData } = selectedProductSlice.actions

export default selectedProductSlice.reducer