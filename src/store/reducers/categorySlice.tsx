import { createSlice } from '@reduxjs/toolkit'
import { Category, PosConfig, Product } from '../../components/Dashboard'
import { fetchData, fetchProductData} from '../actions/categoryActions'
//fetchPOSConfig
export interface CategoryState {
    categoryData:Array<Category>,
    productData: Array<Product>,
    posConfig: PosConfig,
    loading:boolean,
    error:any,
}

const initialState: CategoryState = {
    categoryData: [],
    posConfig: {
      discountConfig: {
        percentage: [],
        allowCustomDiscount: false
      },
      allowCustomSale: false
    },
    productData:[],
    loading: false,
    error: null,
}

const categorySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryData = action.payload;
      });
      builder.addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder.addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        //@ts-ignore
        state.productData = action.payload;
      });
      builder.addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      // builder.addCase(fetchPOSConfig.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // });
      // builder.addCase(fetchPOSConfig.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.posConfig = action.payload;
      // });
      // builder.addCase(fetchPOSConfig.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
    },
  });
//@ts-ignore
export const selectCategoryData = (state) => state.data.categoryData;
//@ts-ignore
export const selectProductData = (state) => state.data.productData;
//@ts-ignore
export const selectPosConfigData = (state) => state.data.posConfig;
//@ts-ignore
export const selectLoading = (state) => state.data.loading;
//@ts-ignore
export const selectError = (state) => state.data.error;
  
export default categorySlice.reducer;

