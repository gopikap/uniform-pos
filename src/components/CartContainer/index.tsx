import React, { useEffect, useRef, useState } from 'react'
import { StyledButton, StyledNumberButton, StyledSpan, StyledTable, StyledTableCell, StyledTableHeadCell } from '../Shared/Styles/TableStyle';
import { Alert, Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Table, TableBody, TableCell, TableHead, TableRow, Theme, Typography, useMediaQuery } from '@mui/material';
import CartTable from '../Shared/CartTable';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductData } from '../../store/reducers/categorySlice';
import { AppDispatch, RootState } from '../../store/store';
import { removeStudent, resetStudentData, selectSelectedStudent, selectStudent } from '../../store/reducers/selectedStudentSlice';
import { clearProducts, removeSelectedProduct, selectProduct } from '../../store/reducers/selectedProductSlice';
import { clearCategory } from '../../store/reducers/selectedCategorySlice';
import OptionDialogContainer from '../Shared/OptionDialogContainer';
import { addedInCart, clearCartProducts, resetDiscount } from '../../store/reducers/cartSlice';
import { Option, ProductAttributes } from '../../components/Dashboard'
import { createRow, mapOrderedProducts } from '../Shared/Utils';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomizedDialogs from '../Shared/DialogContainer';
import Calculator from '../Calculator';
import { toast } from 'react-toastify';
import { fetchStudentSpendLimit, placeOrder } from '../Shared/SharedApis';
import { AppSettings } from '../../AppSettings';
import Axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DiscountContainer from '../Shared/DiscountContainer';

const { FormatMoney } = require('format-money-js');
export const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});

export interface OptionOrder {
    optionId: number;
}

export interface ProductOrder {
    productId: number,
    quantity: number,
    orderedProductOptions: Array<OptionOrder>,
    //customSales: Array<any>,
}

export interface PlaceOrder {
    studentId?: number,
    paymentMethod: string,
    orderType: string,
    orderedProducts: Array<ProductOrder>;
    customSales: Array<any>,
    discountPercentage?: number
}

const CartContainer = () => {
    const [openDialoge, setOpenDialoge] = useState(false);
    const [openOpt, setOpenOpt] = useState(false);
    const [openEft, setOpenEft] = useState(false);
    const [openCal, setOpenCal] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [openBalance, setOpenBalance] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const productsData = useSelector(selectProductData);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [invoiceTotal, setInvoiceTotal] = useState(0);
    const [amtPaid, setAmtPaid] = useState(+0.00);
    const [balancePay, setBalancePay] = useState(0);
    const amtPaidRef = useRef(0);
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const dispatch = useDispatch<AppDispatch>();
    const selectedProductsState = useSelector((state: RootState) => state.selectedProduct);
    const cartState = useSelector((state: RootState) => state.cart);
    const selectedStudent = useSelector(selectSelectedStudent);
    const discountApplied = useSelector((state: RootState) => state.discountApplied);
    const selectedProducts = selectedProductsState.productIds;
    const productsInCart = cartState.productsInCart
    const currentlySelected = selectedProductsState.currentlySelected;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentlySelected !== 0 && selectedProducts) {
            const item = productsData.filter((x: { productId: number; }) => x.productId === currentlySelected);
            if (item.length > 0) {
                // alert("back--" + JSON.stringify(item[0].productAttributeCategories));
                setSelectedRow(item[0]);
                console.log(item[0].productAttributeCategories);
                console.log(item[0].productAttributeCategories.length);
                if (item[0].hasOwnProperty("productAttributeCategories") && item[0].productAttributeCategories.length > 0) {
                    setOpenOpt(true)
                }
            }
        }
    }, [selectedProducts])

    useEffect(() => {
        if (orderPlaced === true) {
            handleBalancePay();
        }
    }, [orderPlaced])

    useEffect(() => {
        amtPaidRef.current = amtPaid;
    }, [amtPaid]);

    const handleQtyTotal = (total: number) => {
        setInvoiceTotal(total);
    }
    const handleDiscountClick = () => { setOpenDiscount(!openDiscount) };
    const handleDiscountClose = () => { setOpenDiscount(false); }

    const handleClearCart = () => {
        dispatch(clearProducts())
        dispatch(clearCategory());
        dispatch(resetStudentData());
        dispatch(clearCartProducts())
        navigate("/home")
    }

    const handleAddToCart = (value: Array<ProductAttributes>) => {
        //@ts-ignore
        const updatedVal = { ...selectedRow };
        updatedVal.optionGroups = value;
        const addItem = createRow(updatedVal.id, updatedVal.name, 1, updatedVal.price, updatedVal.optionGroups)
        let total = addItem.price;
        if (cartState.productsInCart.length > 0)
            total = cartState.total + updatedVal.price;
        if (selectedStudent && selectedStudent.studentId !== 0 && total > selectedStudent.spendLimit && !selectedStudent.noSpendLimitSet) {
            toast("Total exceeds spend limit, cannot add product");
            return;
        }
        dispatch(addedInCart(addItem));
        setOpenOpt(false);
    }

    const handleClose = () => {
        const updatedItems = selectedProducts;
        //@ts-ignore
        const index = updatedItems.findIndex(x => x === selectedRow.id);
        //@ts-ignore
        dispatch(removeSelectedProduct(updatedItems[index]));
        setOpenOpt(false)
    }

    const handleEftpos = () => {
        setOpenEft(true);
    }

    const handleCalculator = () => {
        setOpenCal(true);
    }

    const handleParentBalance = () => {
        setOpenBalance(true)
    }

    const handleAmtPaid = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmtPaid(+e.target.value);
    }

    const handleAmtBtnPaid = (val: number) => {
        if (!isNaN(val)) {
            setAmtPaid(prevAmt => {
                console.log("Prev Amount Paid:", prevAmt);
                return val;
            });

            setTimeout(() => {
                handleConfirmOrder('cash');
            }, 1000);
        } else {
            console.error("Invalid value for amount paid:", val);
        }
    }

    const handleBalancePay = () => {
        const discountedVal = cartState.discountTotal;
        if (discountedVal) {
            const bal = amtPaid - discountedVal;
            setBalancePay(bal)
        }
    }

    const handleOrderPlaced = () => {
        if (orderPlaced) {
            setOrderPlaced(false);
            handleClearCart();
        }
    }

    const handleRemoveStudent = () => {
        if (window.confirm("Are you sure you want to remove student?")) {
            dispatch(removeStudent())
        } else {
            return false;
        }
    }

    const handleTotalDisplay = () => {
        let total = cartState.total;
        if (cartState.discountApplied > 0) {
            total = cartState.discountTotal
        }
        return fm.from(total);
    }

    const renderCalculator = () => {

        return (
            <StyledTable>
                <TableRow>
                    <StyledTableCell style={{ width: '200px' }}>Total sale amount </StyledTableCell>
                    <StyledTableCell colSpan={2} style={{ fontSize: '20px' }}>{handleTotalDisplay()}</StyledTableCell>
                </TableRow>
                {!orderPlaced &&
                    <>
                        <TableRow>
                            <StyledTableCell style={{ width: '200px' }}>Amount paid</StyledTableCell>
                            <StyledTableCell style={{ width: '400px' }}>
                                <FormControl sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-amount" style={{ fontSize: '20px' }}>Amount</InputLabel>
                                    <FilledInput
                                        type='number'
                                        id="filled-adornment-amount"
                                        value={amtPaid}
                                        onChange={handleAmtPaid}
                                        onBlur={handleBalancePay}
                                        sx={{ fontSize: '20px' }}
                                        inputProps={{ min: "0" }}
                                        startAdornment={<InputAdornment position="start" style={{ fontSize: '20px' }}>$</InputAdornment>}
                                    />
                                </FormControl>
                                <Table style={{ border: 0, marginLeft: -20 }}>
                                    <TableRow>
                                        <StyledTableCell colSpan={2} style={{ textAlign: 'center' }}>
                                            <StyledNumberButton onClick={() => { handleAmtBtnPaid(1); }}>$1</StyledNumberButton>
                                            <StyledNumberButton onClick={() => { handleAmtBtnPaid(2); }}>$2</StyledNumberButton>
                                            <StyledNumberButton onClick={() => { handleAmtBtnPaid(5); }}>$5</StyledNumberButton>
                                            <StyledNumberButton onClick={() => { handleAmtBtnPaid(10); }}>$10</StyledNumberButton>
                                            <StyledNumberButton onClick={() => { handleAmtBtnPaid(20); }}>$20</StyledNumberButton>
                                        </StyledTableCell>
                                    </TableRow>
                                </Table>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Calculator onEqualClick={handleBalancePay} currentNumber={(val) => { setAmtPaid(val) }} />
                            </StyledTableCell>
                        </TableRow>

                    </>
                }
                {
                    orderPlaced &&

                    <TableRow>
                        <StyledTableCell style={{ width: '150px', fontSize: '20px' }}>Change due</StyledTableCell>
                        <StyledTableCell style={{ width: '200px', fontSize: '20px' }} colSpan={2}>{fm.from(balancePay)}</StyledTableCell>
                    </TableRow>
                }
            </StyledTable>

        )
    }

    const renderEftPOS = () => {
        return (
            <Typography variant='h6'>
                Please collect {handleTotalDisplay()} from your EFTPOS terminal, then complete the purchase.
            </Typography>
        )
    }

    const renderProcessedEftPOS = () => {
        return (
            <Typography variant='h6' sx={{ display: 'flex' }}>
                Purchase Completed  <CheckCircleOutlineIcon fontSize='large' color='success' sx={{ marginLeft: '10px' }} />
            </Typography>
        )
    }

    const renderPayByBalance = () => {
        return (
            <Typography variant='h6' sx={{ display: 'flex' }}>
                Charge {handleTotalDisplay()} to {selectedStudent.firstName} {selectedStudent.lastName} account balance?
            </Typography>
        )
    }

    const handleConfirmOrder = async (typeOfPayment: string) => {
        if (typeOfPayment === 'cash') {
            if (amtPaidRef.current < cartState.discountTotal) {
                setErrMsg("Amount paid is less than the total sale amount. You cannot complete the purchase");
                return;
            } else {
                setErrMsg('');
            }
        }
        const request = mapOrderedProducts(cartState.productsInCart, selectedStudent, typeOfPayment, cartState)
        setIsLoading(true);
        try {
            //const response = await Axios.post(`${AppSettings.ApiBaseUrl}/orders`, request);
            const response = {
                data: "success"
            }
            if (response && response.data) {
                // alert("Order placed successfully, Purchase completed!");
                setOrderPlaced(true);
            }

            if (typeOfPayment === "eftpos") {
                setTimeout(() => {
                    setOpenEft(false)
                    handleClearCart();
                }, 2000)
            }
            if (typeOfPayment === "Balance") {
                setTimeout(() => {
                    setOpenBalance(false)
                    handleClearCart();
                }, 2000)
            }
            const studentBalance = await fetchStudentSpendLimit(selectedStudent.studentId);

            const updatedValue = { ...selectedStudent };
            if (studentBalance !== null && studentBalance.hasOwnProperty("studentSpendLimit")) {
                updatedValue.id = updatedValue.studentId;
                updatedValue.spendLimit = studentBalance["studentSpendLimit"].spendLimit - studentBalance["studentSpendLimit"].totalSpentToday;
                updatedValue.balance = studentBalance["parentBalance"].balance;
                dispatch(selectStudent(updatedValue));
            }

            // handleClearCart();
        } catch (e) {
            console.log(e);
            //@ts-ignore
            let message = e.message;
            //@ts-ignore
            if (e && e.response && e.response.data && e.response.data.error) {
                //@ts-ignore
                message = message + " ---" + e.response.data.error;
            }
            setErrMsg(message);
            setIsLoading(false);
        }
        setIsLoading(false);
        //handleClearCart();
    }

    return (
        <div style={{ marginTop: '62px', display: 'flex', flexDirection: 'column',height: '90vh' }}>
            <div style={{ textAlign: 'center', borderBottom: '1px solid lightgray' }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Cart</Typography>
            </div>
            <div> 
            {/* style={{ height: '80vh' }} */}
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left' style={{ paddingLeft: '5px' }} sx={{ borderBottom: 0 }} colSpan={1}><Button variant="contained" sx={{ backgroundColor: '#eceff1', color: '#1a77d6' }} onClick={() => setOpenDialoge(true)}>{(selectedStudent && selectedStudent.studentId === 0) ? 'Select Student' : 'Change Student'}</Button></TableCell>
                            {/*<TableCell align='left' style={{ padding: 0 }} sx={{ borderBottom: 0 }} colSpan={2}><Button variant="contained" sx={{ backgroundColor: '#eceff1', color: 'green' }} onClick={handleDiscountClick}>Discount</Button></TableCell>*/}
                            <TableCell align='right' style={{ padding: 0 }} sx={{ borderBottom: 0 }} colSpan={1}><Button variant="contained" sx={{ backgroundColor: '#eceff1', color: '#F25165' }} onClick={handleClearCart}>Clear Cart</Button></TableCell>
                        </TableRow>
                        {(selectedStudent && selectedStudent.studentId === 0) &&
                            <TableRow>
                                <TableCell style={{ padding: 0 }} colSpan={4}>
                                    <Alert style={{ padding: 0 }} severity='info'>Select a student if you want to place order via student/parents account balance</Alert>
                                </TableCell>
                            </TableRow>
                        }
                        {
                            (cartState && cartState.discountApplied !== 0) &&
                            <TableRow>
                                <TableCell style={{ padding: 0 }} colSpan={4}>
                                    <Alert style={{ padding: 0, paddingRight: 5 }} severity='info' onClose={() => {
                                        dispatch(resetDiscount());
                                    }}>
                                        Discount of {cartState.discountType.toLowerCase() === 'amount' && '$' + cartState.discountApplied.toFixed(2)}{cartState.discountType.toLowerCase() === 'percentage' && cartState.discountApplied + '%'} applied
                                    </Alert>
                                </TableCell>
                            </TableRow>
                        }
                        {(selectedStudent && selectedStudent.studentId !== 0) &&
                            <>
                                <TableRow style={{ borderBottom: 0 }}>
                                    <StyledTableCell colSpan={3} style={{ borderBottom: 0 }}>
                                        <div>{selectedStudent.firstName} {selectedStudent.lastName}</div>
                                    </StyledTableCell>
                                    <StyledTableCell colSpan={2} style={{ textAlign: 'right', borderBottom: 0 }}>
                                        <StyledSpan><IconButton><CloseIcon onClick={handleRemoveStudent} /></IconButton></StyledSpan>
                                    </StyledTableCell>
                                </TableRow>
                                <TableRow>
                                    <StyledTableCell colSpan={3}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <StyledSpan>Remaining daily spend limit: </StyledSpan>
                                            <StyledSpan>Account Balance: </StyledSpan>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell colSpan={2} style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                                            <StyledSpan>{selectedStudent?.noSpendLimitSet === true ? "No Limit" : fm.from(selectedStudent?.spendLimit)}</StyledSpan>
                                            <StyledSpan>{fm.from(selectedStudent.balance)}</StyledSpan>
                                        </div>
                                    </StyledTableCell>
                                </TableRow>
                            </>
                        }
                    </TableHead>
                </StyledTable>            
            </div>
            <CartTable productsInCart={productsInCart} customSales={cartState.customSale} products={productsData} handleInvoiceTotal={handleQtyTotal} openD={openDialoge} onDialogeClose={() => setOpenDialoge(false)} />
            <div style={{flexShrink:0}}>
                <StyledTable>
                    <TableBody>
                        {
                            (cartState && cartState.discountApplied > 0) &&
                            <TableRow>
                                <StyledTableCell sx={{ borderBottom: 0 }} colSpan={3}><div style={{ display: 'flex', flexDirection: 'column', fontSize: '18px' }}>Subtotal <StyledSpan>{cartState.totalItems} Items</StyledSpan></div></StyledTableCell>
                                <StyledTableCell sx={{ borderBottom: 0, fontSize: '18px' }} align="right">{fm.from(cartState.total)}</StyledTableCell>
                            </TableRow>
                        }
                        <TableRow>
                            <StyledTableCell sx={{ borderBottom: 0 }} colSpan={3}><div style={{ display: 'flex', flexDirection: 'column', fontSize: '21px' }}>Total {cartState.discountApplied <= 0 && <StyledSpan>{cartState.totalItems} Items</StyledSpan>} {cartState.discountApplied > 0 && <StyledSpan>Discount applied {cartState.discountType === "amount" && '$' + cartState.discountApplied.toFixed(2)}{cartState.discountType === "percentage" && cartState.discountApplied + '%'} </StyledSpan>}</div></StyledTableCell>
                            <StyledTableCell sx={{ borderBottom: 0, fontSize: '21px' }} align="right">{fm.from(cartState.discountTotal)}</StyledTableCell>
                        </TableRow>
                    </TableBody>
                </StyledTable>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }} >
                    <StyledButton sx={{ fontSize: 18 }} variant='contained' onClick={handleCalculator} disabled={selectedStudent && selectedStudent.studentId && !selectedStudent.noSpendLimitSet && (cartState.total > selectedStudent.spendLimit)}>Cash</StyledButton>
                    <StyledButton sx={{ fontSize: 18 }} variant='contained' onClick={handleEftpos} disabled={selectedStudent && selectedStudent.studentId && !selectedStudent.noSpendLimitSet && (cartState.total > selectedStudent.spendLimit)}>EFTPOS</StyledButton>
                    <StyledButton sx={{ fontSize: 18 }} variant='contained' onClick={handleParentBalance} disabled={(selectedStudent && selectedStudent.studentId === 0) || (cartState.total > selectedStudent.spendLimit && !selectedStudent.noSpendLimitSet) || (cartState.total > selectedStudent.balance)}>Balance</StyledButton>
                </div>
            </div>
            {openDiscount && <DiscountContainer openDiscount={openDiscount} handleDiscountClose={handleDiscountClose} />}
            {openOpt && <OptionDialogContainer
                openOpt={openOpt}
                handleClose={handleClose}
                selectedRow={selectedRow!}
                products={productsData}
                openEdit={false}
                handleAddToCart={handleAddToCart} />}
            {
                openEft && <CustomizedDialogs
                    onClose={() => {
                        setOpenEft(false)
                        setErrMsg('');
                        handleOrderPlaced();
                    }
                    }
                    title="EFTPOS"
                    typeOfDialog='etfpos'
                    content={orderPlaced ? renderProcessedEftPOS() : renderEftPOS()}
                    btnTitle={orderPlaced ? '' : "Complete Purchase"}
                    isProcessed={orderPlaced}
                    isLoading={isLoading}
                    errMsg={errMsg}
                    closebtn={orderPlaced ? 'Purchase completed' : 'Cancel'}
                    onSelect={() => handleConfirmOrder('eftpos')}
                />
            }

            {
                openBalance && <CustomizedDialogs
                    onClose={() => {
                        setOpenBalance(false)
                        setErrMsg('');
                        handleOrderPlaced();
                    }
                    }
                    title="Pay by Balance"
                    typeOfDialog='parentBalance'
                    content={orderPlaced ? renderProcessedEftPOS() : renderPayByBalance()}
                    btnTitle={orderPlaced ? '' : "Complete Purchase"}
                    isLoading={isLoading}
                    errMsg={errMsg}
                    isProcessed={orderPlaced}
                    closebtn={orderPlaced ? 'Purchase completed' : 'Cancel'}
                    onSelect={() => handleConfirmOrder('Balance')}
                />
            }
            {
                openCal && <CustomizedDialogs
                    onClose={() => {
                        setOpenCal(false)
                        setErrMsg('');
                        setBalancePay(0);
                        handleOrderPlaced();
                    }
                    }
                    title="Cash Payment"
                    typeOfDialog='cash'
                    content={renderCalculator()}
                    isLoading={isLoading}
                    errMsg={errMsg}
                    btnTitle={orderPlaced ? '' : "Complete Purchase"}
                    closebtn={orderPlaced ? 'Purchase completed' : 'Cancel'}
                    isProcessed={orderPlaced}
                    onSelect={() => handleConfirmOrder('cash')}
                />
            }
        </div>
    )
}

export default CartContainer;


