import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CustomSale, Option } from '../../components/Dashboard'

export interface Discount {
	discountApplied: number;
	discountType: string
}
export interface CartProduct {
	id: number,
	generatedId: string,
	name: string,
	qty: number,
	price: number,
	unit: number,
	optionGroups: Array<Option>,
}
export interface CartCustomSale {
    quantity: number,
    price: number,
	generatedId: string,
	unitPrice: number
}
export interface CartState {
	productsInCart: Array<CartProduct>,
	totalItems: number,
	total: number,
	discountTotal: number,
	discountApplied: number,
	discountType: string,
	customSale: Array<CartCustomSale>
	error: string;
}


const initialState: CartState = {
	productsInCart: [],
	totalItems: 0,
	total: 0,
	discountTotal: 0,
	discountApplied: 0,
	discountType: "",
	customSale: [],
	error: ""
}

interface Total {
	total: number,
	discountedAmt: number
}

function getProductsTotal(state: CartState,items: Array<CartProduct>, customSales:Array<CartCustomSale>): Total {	
	let discountedAmt = 0;
	const productsPrice = items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
	const customSalesAmt = customSales.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
	const total = productsPrice + customSalesAmt;
	discountedAmt = total;
	if (state.discountApplied > 0) {	
		if (state.discountType === "percentage") {
			const discountPercentage = state.discountApplied/100;
			discountedAmt = total - (total * discountPercentage);
		} else if (state.discountType === "amount")  {
			if (state.discountApplied > total) {
				return { total, discountedAmt: 0 };
			}
			discountedAmt = total - state.discountApplied;
		} 
	}
	return { total, discountedAmt };
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addedInCart: (state, action: PayloadAction<CartProduct>) => {
			const updated = [...state.productsInCart]
			updated.push(action.payload);
			state.productsInCart = updated;
			state.totalItems = updated.length + state.customSale.length;
			const totalVals = getProductsTotal(state,updated, state.customSale);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		addCustomSale: (state, action: PayloadAction<CartCustomSale>) => {
			const updated = [...state.customSale]
			updated.push(action.payload);
			state.customSale = updated;
			state.totalItems = updated.length + state.productsInCart.length;
			const totalVals = getProductsTotal(state,state.productsInCart, updated);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		applyDiscount: (state, action: PayloadAction<Discount>) => {
			state.discountApplied = action.payload.discountApplied;
			state.discountType = action.payload.discountType
			const totalVals = getProductsTotal(state,state.productsInCart, state.customSale);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		resetDiscount: (state) => {
			state.discountApplied = 0;
			state.discountType = "";
			const totalVals = getProductsTotal(state,state.productsInCart, state.customSale);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		clearCartProducts: (state) => {
			state.productsInCart = [];
			state.totalItems = 0;
			state.total = 0;
			state.discountTotal = 0;
			state.discountApplied = 0;
			state.discountType = "";
			state.customSale = [];
		},
		updateCart: (state, action: PayloadAction<Array<CartProduct>>) => {
			let updated = [...state.productsInCart];
			updated = action.payload;
			state.productsInCart = updated;
			const totalVals = getProductsTotal(state,updated, state.customSale);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		updateCustomCart: (state, action: PayloadAction<Array<CartCustomSale>>) => {			
			let updatedCustomSales = [...state.customSale];
			updatedCustomSales = action.payload;
			state.customSale = updatedCustomSales;
			const totalVals = getProductsTotal(state,state.productsInCart, updatedCustomSales);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		removedFromCart: (state, action: PayloadAction<string>) => {
			const updated = [...state.productsInCart];		
			const filteredProds = updated.filter(x => x.generatedId !== action.payload);
			state.productsInCart = filteredProds;
			state.totalItems = filteredProds.length + state.customSale.length;
			const totalVals = getProductsTotal(state,filteredProds, state.customSale);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		removeCustomSale: (state, action: PayloadAction<string>) => {
			const updated = [...state.customSale];		
			const filteredProds = updated.filter(x => x.generatedId !== action.payload);
			state.customSale = filteredProds;
			state.totalItems = filteredProds.length+state.productsInCart.length;
			const totalVals = getProductsTotal(state,state.productsInCart, filteredProds);
			state.total = totalVals.total;
			state.discountTotal = totalVals.discountedAmt;
		},
		resetCartData: (state) => initialState
	},
})

// Action creators are generated for each case reducer function
export const { clearCartProducts,resetDiscount, updateCart,updateCustomCart, addedInCart,applyDiscount, removedFromCart, removeCustomSale,resetCartData, addCustomSale } = cartSlice.actions

export default cartSlice.reducer