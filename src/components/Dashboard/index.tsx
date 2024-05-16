import { useState, useEffect, Key } from "react";
import { CircularProgress, Container, Grid, Typography } from "@mui/material"
import ItemCard from "../Shared/ItemCard";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { selectProductData } from "../../store/reducers/categorySlice";
import { toast } from "react-toastify";
import { selectProduct } from "../../store/reducers/selectedProductSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { createRow } from "../Shared/Utils";
import { addedInCart } from "../../store/reducers/cartSlice";
import { selectSelectedStudent } from "../../store/reducers/selectedStudentSlice";

export interface Product {
    id: number, 
    productId:number, 
    name: string,
    imageUrl: string,
    category:Category,
    productAttributeCategories:Array<ProductAttributeCategories>,
    categoryId: string,
    price:string,
    optionGroups:Array<OptionGroup>,
    stock: number,
    isStockSet: boolean,
    stockStatus: string
    
}

export interface ProductAttributeCategories {
    attributeCategoryId: number,
    name: string,
    productAttributes: Array<ProductAttributes>
}

export interface ProductAttributes {
    attributeId: number,
    name: string
}

export interface OptionGroup
{
    groupName: string;
    options: Array<Option>;
}

export interface Option
{
    id: number;
    name: string;
    price: number;
    controlName: string;
    required: boolean;
    groupName?:string
}

export interface Category {
    id: number,
    name: string,
    description: string
}
export interface CustomSale {
    quantity: number,
    price: number
}
export interface DiscountConfig {
    percentage: Array<number>,
    allowCustomDiscount: boolean
}
export interface PosConfig {
    discountConfig: DiscountConfig,
    allowCustomSale: boolean
}

const DashboardPage = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const proData = useSelector(selectProductData);
    const [selectedItems, setSelectedItems] = useState<any>([]);
    const selectedCategory = useSelector((state: RootState) => state.selectedCategory.catId);
    const cartState = useSelector((state: RootState) => state.cart);
    const selectedStudent = useSelector(selectSelectedStudent);
    const {state} = useLocation();
    const navigate = useNavigate();
    
    const toastOptions = {
        autoClose: 5000,
        pauseOnHover: true
    }

    useEffect(() => {
        if(selectedCategory !== 0) {
            const products = proData.filter((x: { category: { id: number; }; }) => x.category.id === selectedCategory);
            setSelectedItems(products);
            if (products === null || products.length === 0)
                toast("No products available", toastOptions)
        }      
    },[selectedCategory])    
       
    const handleProductClick = (item: Product) => {        
        if (item.stockStatus === 'OutOfStock') {
            toast("Product is out of stock and cannot be added to cart.");
            return;
        }
        if (item.stockStatus !== 'OutOfStock' && item.stockStatus !== "Unlimited" && cartState.productsInCart.length > 0) {
            console.log(item)
            const matchProductsLen = cartState.productsInCart.filter(x => x.id === item.id);
            console.log(matchProductsLen);
            if (matchProductsLen.length > 0 &&  matchProductsLen.length + 1 > item.stock ) {
                toast("Product is out of stock and cannot be added to cart. Or here?");
                return;
            }
        }
        if (item.hasOwnProperty("category")) { 
            dispatch(selectProduct(item.productId))             
            if (item.productAttributeCategories.length === 0) {
                let total = item.price;
                if (cartState.productsInCart.length > 0)
                    total = cartState.total + item.price;
                //@ts-ignore
                if (selectedStudent && selectedStudent.studentId !== 0  && !selectedStudent.noSpendLimitSet &&  (parseInt(total * 100) > parseInt(selectedStudent.spendLimit * 100))) {
                    toast("Total exceeds spend limit, cannot add product");
                    return;
                }
                const updatedItem = createRow(item.productId, item.name, 1, parseFloat(item.price), item.productAttributeCategories)
                dispatch(addedInCart(updatedItem));       
            }            
            navigate(".", { replace: true });
        }    
    }
     
    return (
       <Container style={{padding:0, maxHeight:'88vh', overflowY:'auto', overflowX: 'hidden'}}>
            <Grid container spacing={0.5} direction="row" columns={{ xs: 4, sm: 8, md: 12 }}>
                { selectedItems && selectedItems.length > 0  && selectedItems.map((eachItem: any, index: number) =>
                    <Grid item xs={2} sm={4} md={3} key={index} style={{padding:0}}>
                        <ItemCard item={eachItem} searchedPrdId={state && state.prodId ? state.prodId : 0} isOdd={ index % 3 === 0 ? "random1": ((index % 3 === 1) ? "random2" : "random3")}  onClick={handleProductClick} />
                    </Grid>                  
                )} 
            </Grid>  
       </Container>
    )
}

export default DashboardPage;