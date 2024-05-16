import { useState, useEffect } from "react";
import {  Container, Grid } from "@mui/material"
import CustomizedDialogs from "../Shared/DialogContainer";
import SearchContainer from "../Shared/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { selectSelectedStudent, selectStudent } from "../../store/reducers/selectedStudentSlice";
import { selectCategoryData, selectPosConfigData } from "../../store/reducers/categorySlice";
import { selectCategory } from "../../store/reducers/selectedCategorySlice";
import CategoryItemCard from "../Shared/CategoryItemCard";
import { studentsSearch } from "../Shared/SharedApis";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../Shared/AlertDialog";
import DiscountContainer from "../Shared/DiscountContainer";
import CustomSaleContainer from "../Shared/CustomSaleContainer";
import ScanProductContainer from "../Shared/ScanProductContainer";

export interface Product {
    id: number,
    name: string,
    imageUrl: string,
    categoryId: string,
    price: string,
    optionGroups: Array<OptionGroup>
}

export interface OptionGroup {
    groupName: string;
    options: Array<Option>;
}

export interface Option {
    id: number;
    name: string;
    price: number;
    controlName: string;
    required: boolean;
    groupName?: string
}

export interface Category {
    id: number,
    name: string,
    products: Array<Product>
}

const HomePage = () => {
    const dashboardItem = {
        //id: 12367890,
        name: "Scan/Search Student"
    }
    const barcodeProductItem = {
        id: 'scanProducts',
        name: "Scan Product"
    }
    const cancelOrder = {
        id: 'cancel',
        name: "Transactions/Refund"
    }
    const discount = {
        id: 'discount',
        name: "Apply Discount"
    }
    const customSale = {
        id: 'customSale',
        name: "Custom Sale"
    }
    const [open, setOpen] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(false);
    const [openScanProduct, setOpenScanProduct] = useState(false);
    const [openCustomSale, setOpenCustomSale] = useState(false);
    const [list, setList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch<AppDispatch>();
    const catData = useSelector(selectCategoryData); 
    const posConfigData = useSelector(selectPosConfigData);   
    const cartState = useSelector((state:RootState) => state.cart); 
    const [isStudentSelected, setIsStudentSelected] = useState(false);
    const [selectMsg, setSelectMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<Array<Category>>([]);    
    const [selectType, setSelectType] = useState("categories");
    const navigate = useNavigate();

    useEffect(() => {
        let catArray = [];
        catArray.push(dashboardItem);
        catArray.push(barcodeProductItem);
        catArray.push(cancelOrder);
        if (posConfigData.discountConfig) {
            const config = posConfigData.discountConfig;
            if ((config.percentage && config.percentage.length > 0) || config.allowCustomDiscount ) {
                catArray.push(discount);   
            }
        }        
        if (posConfigData.allowCustomSale) {
            catArray.push(customSale);
        }       
        if (catData !== null) {
            catArray = [
                ...catArray,
                ...catData
            ]
        }
        setCategories(catArray);        
    }, [catData])    

    const handleCategorySelect = (item: Object) => {
        if (!item.hasOwnProperty("id") && !item.hasOwnProperty("categoryId")) {
            handleOnClick();
            return;
        }
        //@ts-ignore
        if (item.id === "cancel") {
            navigate('/cancel')
            return;
        }
        //@ts-ignore
        if (item.id === "discount") {
            handleDiscountClick();
            return;
        }
        //@ts-ignore
        if (item.id === "customSale") {
            handleCustomSaleClick();
            return;
        }
        //@ts-ignore
        if (item.id === "scanProducts") {
            handleScanProduct();
            return;
        }
        //@ts-ignore
        const catId = item.id;
        let catType = "Category";
        setSelectType("products");
        setIsLoading(true);
        if (catType === "Category") {
            dispatch(selectCategory(catId));
            navigate('/dashboard')
        }
        setIsLoading(false);
    }

    const handleDiscountClick = () => { setOpenDiscount(!openDiscount) };
    const handleDiscountClose = () => { setOpenDiscount(false); }
    const handleCustomSaleClick = () => {setOpenCustomSale(!openCustomSale)};
    const handleCustomSaleClose = () => { setOpenCustomSale(false); }
    const handleScanProduct = () => {setOpenScanProduct(!openScanProduct)};
    const handleScanProductClose = () => { setOpenScanProduct(false); }
    const handleOnClick = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    const handleOnChange = async (e: any) => {
        if (e && e.target.value !== undefined && e.target.value.length >= 3) {
            const data = await studentsSearch(e.target.value);
            if (data !== null && data.length > 0) {
                setList(data);
            }
        }
    }

    const handleScanChange = async (e: any) => {
        if (e && e.target.value !== undefined && e.target.value.length >= 3) {
            // const data = await studentsSearch(e.target.value);
            // if (data !== null && data.length > 0) {
            //     setList(data);
            // }
        }

    }

    const handleOnSelect = async (selectedValue: any) => {
        setSelectedStudent(selectedValue);
    }

    const handleProductSelect = async (selectedValue: any) => {
        setSelectedProduct(selectedValue);
    }

    const handleBarcodeStudentSelect = async (selectedValue: any) => {
        dispatch(selectStudent(selectedValue));
        setOpen(false);
        setIsStudentSelected(true);
        setSelectMsg(`Student ${selectedValue.firstName} ${selectedValue.lastName} linked to sale`);
        setTimeout(async () => {
            setIsStudentSelected(false);
        }, 3000)
    }

    const handleBarcodeProductSelect = async (selectedValue: any) => {        
         setOpenScanProduct(false);
        // setIsStudentSelected(true);
        // setSelectMsg(`Student ${selectedValue.firstName} ${selectedValue.lastName} linked to sale`);
        // setTimeout(async () => {
        //     setIsStudentSelected(false);
        // }, 3000)
    }

    const handleStudentSelect = async (selectedValue: any) => {
        dispatch(selectStudent(selectedValue));
        setOpen(false);
        setIsStudentSelected(true);
        setSelectMsg(`Student ${selectedValue.firstName} ${selectedValue.lastName} linked to sale`);
        setTimeout(async () => {
            setIsStudentSelected(false);
        }, 3000)
    } 
    
    return (
        <Container style={{  overflowY: 'auto', overflowX: 'hidden' , ...((cartState && (cartState.productsInCart.length > 0 || cartState.customSale.length > 0))  ? { maxHeight: '88vh' } : {})}}>
            {/* xs={12}  md={12}  maxHeight: '100vh',*/}
            <Grid container spacing={1} direction="row" alignItems="center" style={{  marginTop: 20, width: '100%' }}>
                {selectType === "categories" && categories && categories.length > 0 && categories.map((eachItem: any, index: number) =>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CategoryItemCard item={eachItem} isOdd={index % 3 === 0 ? "random1" : ((index % 3 === 1) ? "random2" : "random3")} onClick={handleCategorySelect} />
                    </Grid>
                )}
            </Grid>
            {open && <CustomizedDialogs
                onClose={handleClose}
                title="Search Student"
                typeOfDialog="student"
                errMsg=""
                content={<SearchContainer onChange={handleOnChange} options={list} onCardClick={handleStudentSelect} onSelect={handleOnSelect} onStudentSelect={handleBarcodeStudentSelect} />}
                btnTitle="Select Student"
                closebtn="Cancel"
                selectedStudent={selectedStudent}
                onSelect={handleStudentSelect}
            />
            }
            {openDiscount && <DiscountContainer openDiscount={openDiscount} handleDiscountClose={handleDiscountClose} /> }
            {openCustomSale && <CustomSaleContainer openCustomSale={openCustomSale} handleCustomSaleClose={handleCustomSaleClose}  />}
            {openScanProduct &&  <ScanProductContainer onClose={handleScanProductClose}  onChange={handleScanChange}  onCardClick={handleProductSelect} onSelect={handleProductSelect} onProductSelect={handleBarcodeProductSelect}  />}
            {
                isStudentSelected && <AlertDialog
                    onClose={() => {
                        setIsStudentSelected(false)
                        setSelectMsg('');
                    }}
                    msg={selectMsg}
                    title="Add Student"
                    isSuccess={isStudentSelected}
                    msgMore={""}
                    isLoading={false}
                    open={isStudentSelected}
                    isConfirm={false}
                    paymentMethod="eftpos"
                />
            }

        </Container>
    )
}

export default HomePage;
