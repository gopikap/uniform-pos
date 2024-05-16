import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { InputBase, Menu, MenuItem, alpha, Box, Toolbar, List, Typography, Divider, IconButton, Autocomplete, TextField, Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Student, removeStudent, selectSelectedStudent, selectStudent } from '../../store/reducers/selectedStudentSlice';
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { AppDispatch } from '../../store/store';
import CloseIcon from '@mui/icons-material/Close';
import BarcodeScanner from './BarcodeScanner';
import CustomizedDialogs from './DialogContainer';
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});

interface StudentProps {
    onChange: (e: any) => void;
    onSelect: (selectedVal: any) => void,
    onProductSelect: (selectedVal: any) => void,
    onCardClick: (selectedVal: any) => void,
    onClose: () => void;
}

export default function ScanProductContainer(props: StudentProps) {
    const [product, setStudent] = useState<Student | null>(null);
    const [productCode, setProductCode] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const selectedStudentFromState = useSelector(selectSelectedStudent);

    // useEffect(() => {
    //     if (selectedStudentFromState.productCode !== 0) {
    //         const selectedStudent = selectedStudentFromState;
    //         var productSelected: Student = {
    //             id: selectedStudent.productCode,
    //             firstName: selectedStudent.firstName,
    //             lastName: selectedStudent.lastName,
    //             spendLimit: selectedStudent.spendLimit,
    //             balance: selectedStudent.balance,
    //             allergies: selectedStudent.allergies,
    //             email: selectedStudent.email,
    //             imgSrc: '',
    //             noSpendLimitSet:selectedStudent.nospendLimitSet
    //         }
    //         setStudent({ ...productSelected })
    //     }
    // }, [])

    // const getStudentValues = async (selectedValue: any) => {
    //     if (selectedValue !== null) {
    //         const productBalance = await fetchStudentSpendLimit(selectedValue.id);
    //         const updatedValue = selectedValue;
    //         if (productBalance !== null && productBalance.hasOwnProperty("productSpendLimit")) {
    //             updatedValue.spendLimit = productBalance["productSpendLimit"].spendLimit - productBalance["productSpendLimit"].totalSpentToday;
    //             updatedValue.balance = productBalance["parentBalance"].balance;
    //             updatedValue.noSpendLimitSet= productBalance["productSpendLimit"].noSpendLimitSet;
    //         }
    //         setStudent(updatedValue);
    //         return updatedValue;
    //     }
    // }

    // const handleOnSelect = async (e: any, selectedValue: any) => {        
    //     if (selectedValue !== null) {
    //         const updatedValue = await getStudentValues(selectedValue);
    //         props.onSelect(updatedValue);
    //     }
    // }


    const handleRemoveProduct = () => {
        // if (window.confirm("Are you sure you want to remove product?")) {
        //     dispatch(removeStudent());
        //     setStudent({ ...selectedStudentFromState, id: 0 })
        //     props.onSelect(null);
        // } else {
        //     return false;
        // }
    }

    const handleBarcodeValue = async (val: string) => {
        setProductCode(val);
        //call api to select product
        // const searchStudentById =  await productsSearch(val);
        // if (searchStudentById && Array.isArray(searchStudentById) &&  searchStudentById.length > 0 ) {
        //     const selectedStudentVal = await getStudentValues(searchStudentById[0])
        //     props.onStudentSelect(selectedStudentVal);
        // }
    }

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setProductCode(event.target.value);
        //call api to select product
        // const searchStudentById =  await productsSearch(event.target.value);
        // if (searchStudentById && Array.isArray(searchStudentById) &&  searchStudentById.length > 0 ) {
        //     const selectedStudentVal = await getStudentValues(searchStudentById[0])
        //     props.onStudentSelect(selectedStudentVal);
        // }        
    }

    const renderProduct = () => {
        return (
            <>
                <Card sx={{ maxWidth: 500, marginTop: 2 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <CloseIcon onClick={handleRemoveProduct} />
                            </IconButton>
                        }
                        title="Product Details"
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }} onClick={() => props.onCardClick(product)}>
                        <CardMedia component="img" height="180" style={{ width: '40%' }} image={product?.imgSrc ? 'props.selectedStudent.imgSrc' : 'https://cdn-icons-png.flaticon.com/512/219/219970.png'} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product?.firstName} {product?.lastName}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </>

        )
    }

    const renderScanProduct = () => {
        return (
            <>                
                <BarcodeScanner scanValue={handleBarcodeValue} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
                    <TextField
                        margin="normal"
                        id="productCode"
                        label="Product Code"
                        name="productCode"
                        autoFocus
                        value={productCode}
                        onChange={handleChange}
                        style={{ margin: 0 }}
                    />
                    <Typography variant='subtitle1' sx={{marginLeft:2}}>Once you scan a product's barcode it will automatically "Add to Cart".<br></br> Press "Complete Purchase" once you're ready to take payment.</Typography>
                </div>
                {product && product.id > 0 && renderProduct()}
            </>
        )
    }


    return (
        <CustomizedDialogs
            onClose={props.onClose}
            title="Scan Product"
            typeOfDialog="scanProduct"
            isFullWidth={false}
            errMsg=""
            content={renderScanProduct()}
            btnTitle="Complete Purchase"
            //extraBtn='Complete Purchase'
            closebtn="Cancel"
            selectedStudent={product}
            onSelect={props.onProductSelect}
        />
    )
}