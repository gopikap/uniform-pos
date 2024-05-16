import React, { ChangeEvent, useState } from 'react';
import { FilledInput, FormControl, Container, Grid, Table, TableRow, InputLabel, InputAdornment } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { StyledTableCell } from "./Styles/TableStyle";
import { selectPosConfigData } from '../../store/reducers/categorySlice';
import CustomizedDialogs from './DialogContainer';
import { addCustomSale } from '../../store/reducers/cartSlice';
import { createCustomRow } from './Utils';
import Calculator from '../Calculator';
import { toast } from 'react-toastify';

interface CustomSaleProps {
    openCustomSale: boolean,
    handleCustomSaleClose: () => void
}

export default function CustomSaleContainer(props: CustomSaleProps) {
    const posConfigData = useSelector(selectPosConfigData);
    const dispatch = useDispatch();
    const [customCustomSaleAmt, setCustomCustomSaleAmt] = useState(0);
    const [discount, setCustomSale] = useState(0);
    const [isReset, setIsReset] = useState(false);
    const handleCustomCustomSaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomCustomSaleAmt(+e.target.value);
    }

    const handleApplyCustomSale = (extraVal: string) => {         
        if (customCustomSaleAmt > 0) {
            var item ={
                quantity: 1,
                price: customCustomSaleAmt
            };
            const mappedItem = createCustomRow(item.price, item.quantity);
            dispatch(addCustomSale(mappedItem));    
            setIsReset(true);
            if(extraVal === "onClose") {
                props.handleCustomSaleClose();
            }
        } else {
            if(extraVal === "onClose") {
                props.handleCustomSaleClose();
                return;
            }
            alert("Please add a custom sale value before adding to cart.");
            return false;
        }
        
    }

    const renderCustomSale = () => {
        return (
            <Table style={{ border: 0 }}>
                <TableRow><StyledTableCell colSpan={3}><p>To add multiple custom sale items, enter the first item's value, then press "Add to Cart" and repeat for remaining custom sale items. Click 'Complete Purchase' once you're ready to take payment.</p></StyledTableCell></TableRow>
                <TableRow>             
                    <StyledTableCell style={{ border: 0 }}>Custom Sale Value: </StyledTableCell>
                    <StyledTableCell style={{ border: 0 }}>
                        <FormControl sx={{ m: 1 }} variant="filled">                            
                            <InputLabel htmlFor="filled-adornment-amount" style={{ fontSize: '20px' }}>Custom Sale</InputLabel>
                            <FilledInput
                                type='number'
                                id="filled-adornment-amount"
                                value={customCustomSaleAmt}
                                onChange={handleCustomCustomSaleChange}
                                //onBlur={handleCustomSale}
                                sx={{ fontSize: '20px' }}
                                inputProps={{ min: "0" }}
                                startAdornment={<InputAdornment position="start" style={{ fontSize: '20px' }}>$</InputAdornment>}
                            />
                        </FormControl>
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} sx={{textAlign: 'center'}}>
                        <Calculator 
                                isReset={isReset}
                                currentNumber={(val) => { 
                                console.log("Value", val);
                                setCustomCustomSaleAmt(val); 
                                setIsReset(false);

                        }}  />
                    </StyledTableCell>
                </TableRow>
            </Table>
        )
    }

    return (
        <CustomizedDialogs
            onClose={props.handleCustomSaleClose}
            title="Custom Sale"
            typeOfDialog="discount"
            isFullWidth={false}
            errMsg=""
            content={renderCustomSale()}
            btnTitle="Add To Cart"
            extraBtn='Complete Purchase'
            closebtn="Cancel"
            selectedStudent={discount}
            onSelect={handleApplyCustomSale}
        />

    )
}