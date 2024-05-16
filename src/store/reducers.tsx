import { combineReducers } from 'redux';
import categoryReducer from './reducers/categorySlice';
import selectedCategoryReducer from './reducers/selectedCategorySlice';
import selectedProductReducer from './reducers/selectedProductSlice';
import  selectedStudentReducer  from './reducers/selectedStudentSlice';
import selectedSchoolReducer from './reducers/selectedSchoolSlice'
import cartReducer from './reducers/cartSlice'
import  discountAppliedReducer  from './reducers/discoutAppliedSlice';

const rootReducer = combineReducers({
  data: categoryReducer,
  selectedCategory: selectedCategoryReducer,
  student: selectedStudentReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer,
  school: selectedSchoolReducer,
  discountApplied: discountAppliedReducer
});

export default rootReducer;