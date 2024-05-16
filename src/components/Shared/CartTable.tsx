import { useEffect, useState } from 'react';
import {Grid,  TableBody, TableContainer, TableRow,  } from '@mui/material';
import { StyledTable,  StyledTableCell, StyledDiv, StyledroductNameTableCell } from './Styles/TableStyle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { removeSelectedProduct, selectProduct } from '../../store/reducers/selectedProductSlice';
import CustomizedDialogs from './DialogContainer';
import SearchContainer from './SearchContainer';
import { selectSelectedStudent, selectStudent } from '../../store/reducers/selectedStudentSlice';
import OptionDialogContainer from './OptionDialogContainer';
import {  studentsSearch } from './SharedApis';
import { toast } from 'react-toastify';
import { CustomSale, Option, ProductAttributes } from '../Dashboard';
import { removeCustomSale, removedFromCart, updateCart, updateCustomCart } from '../../store/reducers/cartSlice';
import { createCustomRow, getTotal } from './Utils';
import AlertDialog from './AlertDialog';

export function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}

export interface Row {
    id: number;
    name: string;
    qty: number;
    unit: number;
    price: number;
    productAttributeCategories: Array<ProductAttributes>
}

function subtotal(items: readonly Row[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

interface CartTableProps {
    products: Array<any>
    productsInCart: Array<any>,
    customSales: Array<CustomSale>,
    handleInvoiceTotal: (value: number) => void;
    openD: boolean
    onDialogeClose: () => void;
}

export default function CartTable(props: CartTableProps) {
    const [open, setOpen] = useState(false);
    const [openOpt, setOpenOpt] = useState(false);
    const [list, setList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isStudentSelected, setIsStudentSelected] = useState(false);
    const [selectMsg, setSelectMsg] = useState('');
    const [selectedRow, setSelectedRow] = useState<Row | null>(null);
    const [mappedItems, setMappedItems] = useState<any>([]);
    const [customItems, setCustomItems] = useState<any>([]);
    const dispatch = useDispatch<AppDispatch>();
    const selectedStudentFromState = useSelector(selectSelectedStudent);
    const cartState = useSelector((state: RootState) => state.cart);
    
    useEffect(() => {
        if (props.productsInCart !== null &&  props.productsInCart.length >= 0)
            setMappedItems(props.productsInCart);        
    }, [props.productsInCart])

    useEffect(() => {
        if (props.customSales !== null &&  props.customSales.length >= 0) {
            // const mappedCustomItems = props.customSales.map(each => {
            //     return createCustomRow(each.price, each.quantity)
            // });
            // console.log(mappedCustomItems);
            setCustomItems(props.customSales);
        }
                    
    }, [props.customSales])

    useEffect(() => {
        if (selectedStudentFromState && selectedStudentFromState.studentId === 0) {
            setSelectedStudent(null)
        }
    },[selectedStudentFromState])

    const handleQuantityChange = (index: number, increment: boolean) => {
        let updatedItems = [...mappedItems];
        let qty = updatedItems[index].qty;
        const matchProd = props.products.find(x => x.id === updatedItems[index].id);        
        if (increment) {
            if (matchProd.stock - qty === 0) {
                toast("No more products can be added as product became out of stock");
                return;
            }
            qty += 1;  
        } else {
            const prevQty = updatedItems[index].qty;
            qty = Math.max(updatedItems[index].qty - 1, 1);
            if (prevQty - 1 === 0) {
                dispatch(removeSelectedProduct(updatedItems[index].id));                
                dispatch(removedFromCart(updatedItems[index].generatedId))
            }
        }
        // Create a new object for the item with the updated quantity and price
        const updatedItem = {
            ...updatedItems[index],
            qty: qty,
            price: qty * getTotal(updatedItems[index].unit, updatedItems[index].optionGroups)   // updatedItems[index].unit,
        };
        
        updatedItems[index] = updatedItem;

        //updatedItems[index].price = qty * updatedItems[index].unit;
        const invoiceTotal: number = subtotal(updatedItems);
        if (selectedStudentFromState.studentId !==0 && !selectedStudentFromState.noSpendLimitSet &&  (invoiceTotal > selectedStudentFromState.spendLimit && increment) ){
            // updatedItems[index].qty =  updatedItems[index].qty -1;
            toast("No more products can be added as it exceeds student daily limit");
        } else {
            setMappedItems(updatedItems);
            if (increment)
                dispatch(updateCart(updatedItems))
        }

    };

    const handleCustomQtyChange = (index: number, increment: boolean) => {
        let updatedItems = [...customItems];
        let qty = updatedItems[index].quantity;
        let unitPrice = updatedItems[index].unitPrice;
        if (increment) {
            qty += 1;
            //dispatch(selectProduct(updatedItems[index].id))
        } else {
            const prevQty = updatedItems[index].quantity;
            qty = Math.max(updatedItems[index].quantity - 1, 1);
            if (prevQty - 1 === 0) {                           
                dispatch(removeCustomSale(updatedItems[index].generatedId))
            }
        }
        // Create a new object for the item with the updated quantity and price
        const updatedItem = {
            ...updatedItems[index],
            quantity: qty,
            price: qty * unitPrice   // updatedItems[index].unit,
        };

        updatedItems[index] = updatedItem;

        //updatedItems[index].price = qty * updatedItems[index].unit;
        const invoiceTotal: number = subtotal(updatedItems);
        if (selectedStudentFromState.studentId !==0 && !selectedStudentFromState.noSpendLimitSet &&  (invoiceTotal > selectedStudentFromState.spendLimit && increment) ){
            // updatedItems[index].qty =  updatedItems[index].qty -1;
            toast("No more products can be added as it exceeds student daily limit");
        } else {
            setCustomItems(updatedItems);
            if (increment)
                dispatch(updateCustomCart(updatedItems))
        }
    };

    function extractQuantities() {
        const quantities = {};
        props.productsInCart.forEach((ele) => {
            //@ts-ignore
            quantities[ele.id] = quantities[ele.id] ? quantities[ele.id] + 1 : 1;
        });
        return quantities;
    }

    useEffect(() => {
        if (mappedItems !== null && mappedItems.length > 0) {
            const invoiceTotal = subtotal(mappedItems);
            props.handleInvoiceTotal(invoiceTotal);
        }
    }, [mappedItems])

    const handleOnChange = async (e: any) => {
        if (e !== null) {
            if ( e.target.value !== undefined && e.target.value !== '' && e.target.value.length >= 3) {
                const data = await studentsSearch(e.target.value);
                if(data !== null && data.length > 0) {                    
                    setList(data);
                }
            }
        }
    }

    const handleOnSelect = async (selectedValue: any) => { 
        setSelectedStudent(selectedValue);     
    }

    const handleBarcodeStudentSelect = async (selectedValue: any) => {
        dispatch(selectStudent(selectedValue));
        setOpen(false);
        setIsStudentSelected(true);
        setSelectMsg(`Student ${selectedValue.firstName} ${selectedValue.lastName} linked to sale`);            
        setTimeout(async () => {
            setIsStudentSelected(false);                            
        }, 2000)
        props.onDialogeClose();
    }    

    const handleStudentSelect = (selectedValue: any) => {
        dispatch(selectStudent(selectedValue));
        setOpen(false);
        setIsStudentSelected(true);
        setSelectMsg(`Student ${selectedValue.firstName} ${selectedValue.lastName} linked to sale`);            
        setTimeout(async () => {
            setIsStudentSelected(false);                            
        }, 2000)
        props.onDialogeClose();
    }

    const handleAddToCart = (selectedValue: Array<ProductAttributes>) => {
        setOpen(false);
        const updatedCartItems = [...cartState.productsInCart];
        const matchingIndex = updatedCartItems.findIndex(x => x.id === selectedRow?.id);
        // Create a new array with the updated optionGroups
        const updatedOptions = selectedValue;
        // Create a new object for the cart item with the updated optionGroups
        // const updatedCartItem = {
        //     ...updatedCartItems[matchingIndex],
        //     optionGroups: updatedOptions,
        //     price: updatedCartItems[matchingIndex].qty * getTotal(updatedCartItems[matchingIndex].unit, updatedOptions)   // updatedItems[index].unit,
        // };
        
        // Replace the old cart item with the updated one
        //updatedCartItems[matchingIndex] = updatedCartItem;
        //dispatch(updateCart(updatedCartItems));
        setOpenOpt(false);
        props.onDialogeClose();
    }


    const handleClose = () => {
        setOpen(false);
        props.onDialogeClose();
    }

    const handleAddOptions = (selectedRow: any) => {
        setSelectedRow(selectedRow);
        setOpenOpt(true);
    }

    const formattedOptionsValue = (selectedOptions: Array<Option>) => {
        const formattedOptions = selectedOptions.map(options => options.name);
        const formattedOptionsString = formattedOptions.join(', ');
        return formattedOptionsString;
    }    
    
    return (
        
        <div style={ {flex:1, overflowY:'auto'}
        //     {maxHeight:'70vh',overflowY:'auto'
        // ,
        // ...(window.innerWidth>=500 && window.innerWidth<=800 &&{
        //     maxHeight:'70vh'
        // }),
        // ...(window.innerWidth>=1000 &&{
        //     maxHeight:'43vh'})
        // }
        }> 
        <TableContainer >
            <StyledTable sx={{ minWidth: 400, border: 0 }} aria-label="spanning table" stickyHeader>
                <TableBody>
                    {mappedItems.map((row: any, index: number) => (
                        <TableRow key={row.generatedId}>
                            <StyledroductNameTableCell>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>{row.name}</div>
                                    {
                                        row.optionGroups && <span style={{ fontSize: '14px', fontWeight: 'normal' }}>{formattedOptionsValue(row.optionGroups)}</span>
                                    }
                                    <AddCircleIcon style={{ color: '#7c8ce8' }} fontSize='small' onClick={() => handleAddOptions(row)} />
                                </div>
                            </StyledroductNameTableCell>
                            <StyledTableCell align="right" >
                                <StyledDiv>
                                    <RemoveCircleIcon color='primary' fontSize='large' onClick={() => handleQuantityChange(index, false)} />
                                    <span>{row.qty}</span>
                                    <AddCircleIcon style={{ color: '#7c8ce8' }} fontSize='large' onClick={() => handleQuantityChange(index, true)} /></StyledDiv>
                            </StyledTableCell>
                            <StyledTableCell align="right">${ccyFormat(row.price)}</StyledTableCell>
                        </TableRow>
                    ))}
                    {customItems.map((row: any, index: number) => (
                        <TableRow key={row.generatedId}>
                            <StyledroductNameTableCell>
                                <div>Custom Sale</div>
                            </StyledroductNameTableCell>
                            <StyledTableCell align="right" >
                                <StyledDiv>
                                    <RemoveCircleIcon color='primary' fontSize='large' onClick={() => handleCustomQtyChange(index, false)} />
                                    <span>{row.quantity}</span>
                                    <AddCircleIcon style={{ color: '#7c8ce8' }} fontSize='large' onClick={() => handleCustomQtyChange(index, true)} /></StyledDiv>
                            </StyledTableCell>
                            <StyledTableCell align="right">${ccyFormat(row.price)}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
            {(open || props.openD) && <CustomizedDialogs
                onClose={handleClose}
                title="Search Student"
                typeOfDialog="student"
                content={<SearchContainer onChange={handleOnChange} onCardClick={handleStudentSelect} options={list} onSelect={handleOnSelect} onStudentSelect={handleBarcodeStudentSelect} />}
                btnTitle="Select Student"
                closebtn='Cancel'
                errMsg=''
                selectedStudent={selectedStudent}
                onSelect={handleStudentSelect}
            />
            }
            {openOpt && <OptionDialogContainer openEdit={true} handleAddToCart={handleAddToCart} openOpt={openOpt} handleClose={() => setOpenOpt(false)} selectedRow={selectedRow!} products={props.products} />}
            {
                isStudentSelected && <AlertDialog
                    onClose={() => {
                        setIsStudentSelected(false)
                        setSelectMsg('');
                    }}
                    title="Add Student"
                    msg={selectMsg}
                    isSuccess={isStudentSelected}
                    msgMore={""}
                    isLoading={false}
                    open={isStudentSelected}
                    isConfirm={false}
                    paymentMethod='eftpos'
                />
            }      
        </TableContainer>
        </div>
       
    );
}