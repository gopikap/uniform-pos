import React, { ChangeEvent, useEffect, useState } from 'react';
import { FilledInput, FormControl, Container, Grid, Table, TableRow, InputLabel, InputAdornment, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { StyledNumberButton, StyledRadio, StyledRadioDiscount, StyledTableCell } from "../Shared/Styles/TableStyle";
import { selectPosConfigData } from '../../store/reducers/categorySlice';
import CustomizedDialogs from './DialogContainer';
import { applyDiscount, resetDiscount } from '../../store/reducers/cartSlice';
import AlertDialog from './AlertDialog';
import Calculator from '../Calculator';
import { RootState } from '../../store/store';
import { fm } from '../CartContainer';
import { toast } from 'react-toastify';

interface DiscountProps {
    openDiscount: boolean,
    handleDiscountClose: () => void
}

export default function DiscountContainer(props: DiscountProps) {
    const posConfigData = useSelector(selectPosConfigData);
    const cartState = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [customDiscountPer, setCustomDiscountPer] = useState(0);
    const [customDiscountAmt, setCustomDiscountAmt] = useState(0);
    const [isReset, setIsReset] = useState(false);
    const [customType, setCustomType] = useState("");
    const [discount, setDiscount] = useState(0);
    const [isApplied, setIsApplied] = useState(false);
    const [selectMsg, setSelectMsg] = useState("");

    useEffect(() => {                                 
        if ((cartState.discountType === "percentage" &&  cartState.discountApplied > 100)) {
            toast('Discount cannot be applied because discount is greater than total sale value');
            dispatch(resetDiscount());
            return;                
        }    
        if (
            (cartState.discountType === "amount" && cartState.total < cartState.discountApplied)
        ) {
            toast('Discount cannot be applied because discount is greater than total sale value');
            dispatch(resetDiscount());
            return;
        }    
    },[cartState.discountType, cartState.discountApplied])

    const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomDiscountPer(+e.target.value);
    }
    const handleCustomDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomDiscountAmt(+e.target.value);
    }
    const handleDiscountBtnPaid = (val: number) => {
        if (!isNaN(val)) {
            dispatch(applyDiscount({
                discountApplied: val,
                discountType: "percentage"
            }))
            if (val < 100) {
                setIsApplied(true);
            }
            setSelectMsg(`Discount of ${val}% applied.`);
            setTimeout(async () => {
                setIsApplied(false);
                props.handleDiscountClose();
            }, 2000)

        } else {
            console.error("Invalid value for amount paid:", val);
        }
    }

    const handleApplyDiscount = () => {
        let appliedDone = false;
        if (customType === "") {
            alert("Please select a discount type!");
            return;
        }
        let val = 0;
        if (customType === "percentage") {
            val = customDiscountPer;
            dispatch(applyDiscount({
                discountApplied: customDiscountPer,
                discountType: "percentage"
            }))
        }
        if (customType === "amount") {
            val = customDiscountAmt;
            dispatch(applyDiscount({
                discountApplied: customDiscountAmt,
                discountType: "amount"
            }))
        }
        if ((customType === "amount" && val < cartState.total) || (customType === "percentage" && val <= 100)) {
            setIsApplied(true);
            appliedDone = true;
        }
        let value = customType === "percentage" ? val + '%' : '$' + val;
        setSelectMsg(`Discount of ${value} applied.`);
        setTimeout(async () => {
            setIsApplied(false);
            if(appliedDone) {
                props.handleDiscountClose();
            }            
        }, 2000)
    }

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCustomType(event.target.value)
        setCustomDiscountAmt(0);
        setCustomDiscountPer(0);
        setIsReset(true);
    }
    const renderDiscount = () => {
        const schoolDiscountConfig = posConfigData.discountConfig;
        const percentages = schoolDiscountConfig.percentages;
        return (
            <Table style={{ border: 0 }}>
                {
                    cartState && cartState.discountApplied > 0 &&
                    <TableRow>
                        <StyledTableCell colSpan={5} sx={{ border: 0 }}>
                            <span style={{ fontWeight: 'normal', color: 'gray', fontSize: '15px' }}>
                                Discount of {cartState.discountType === "amount" && '$'+cartState.discountApplied.toFixed(2)}{cartState.discountType === "percentage" && cartState.discountApplied+'%'} already applied. If you'd like to replace it, add your new discount below.
                            </span>
                        </StyledTableCell>
                    </TableRow>
                }
                {
                    percentages.length > 0 &&
                    <TableRow>
                        <StyledTableCell style={{ border: 0 }}>Preset Discounts: </StyledTableCell>
                        <StyledTableCell colSpan={4} style={{ textAlign: 'center', border: 0 }}>
                            {
                                percentages.map((eachPer: number) => {
                                    return <StyledNumberButton onClick={() => { handleDiscountBtnPaid(eachPer); }}>{eachPer}%</StyledNumberButton>
                                })
                            }
                        </StyledTableCell>
                    </TableRow>
                }
                {
                    schoolDiscountConfig.allowCustomDiscount && (
                        <>
                            <TableRow>
                                <StyledTableCell style={{ border: 0 }}>Custom Discount Type: </StyledTableCell>
                                <StyledTableCell colSpan={4} style={{ border: 0 }}>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            name="row-radio-buttons-group"
                                            onChange={handleOptionChange}
                                        >
                                            <FormControlLabel value="percentage" control={<StyledRadio sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label="Custom Percentage" />
                                            <FormControlLabel value="amount" control={<StyledRadio sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label="Custom Dollar Value" />
                                        </RadioGroup>
                                    </FormControl>
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                {customType === "percentage" &&
                                    <>
                                        <StyledTableCell style={{ border: 0 }}>Custom Percentage: </StyledTableCell>
                                        <StyledTableCell style={{ border: 0 }}>
                                            <FormControl sx={{ m: 1 }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-amount" style={{ fontSize: '20px' }}>Discount</InputLabel>
                                                <FilledInput
                                                    type='number'
                                                    id="filled-adornment-amount"
                                                    value={customDiscountPer}
                                                    onChange={handleDiscountChange}
                                                    sx={{ fontSize: '20px' }}
                                                    inputProps={{ min: "0" }}
                                                    startAdornment={<InputAdornment position="start" style={{ fontSize: '20px' }}>%</InputAdornment>}
                                                />
                                            </FormControl>
                                        </StyledTableCell>
                                    </>
                                }
                                {customType === "amount" &&
                                    <>
                                        <StyledTableCell style={{ border: 0 }}>Custom Dollar Value: </StyledTableCell>
                                        <StyledTableCell style={{ border: 0 }}>
                                            <FormControl sx={{ m: 1 }} variant="filled">
                                                <InputLabel htmlFor="filled-adornment-amount" style={{ fontSize: '20px' }}>Discount</InputLabel>
                                                <FilledInput
                                                    type='number'
                                                    id="filled-adornment-amount"
                                                    value={customDiscountAmt}
                                                    onChange={handleCustomDiscountChange}
                                                    //onBlur={handleDiscount}
                                                    sx={{ fontSize: '20px' }}
                                                    inputProps={{ min: "0" }}
                                                    startAdornment={<InputAdornment position="start" style={{ fontSize: '20px' }}>$</InputAdornment>}
                                                />
                                            </FormControl>
                                        </StyledTableCell>
                                    </>

                                }
                                {customType !== "" &&
                                <StyledTableCell sx={{ textAlign: 'center'}}>
                                    <Calculator 
                                        isReset={isReset} 
                                        onEqualClick={() => {
                                            customType === "amount" ? setCustomDiscountAmt(customDiscountAmt) : setCustomDiscountPer(customDiscountPer) 
                                        }
                                        }
                                        currentNumber={(val) => { 
                                        customType === "amount" ? setCustomDiscountAmt(val) : setCustomDiscountPer(val) 
                                        setIsReset(false);
                                    }} />
                                </StyledTableCell>
                                }
                            </TableRow>

                        </>
                    )
                }
            </Table>
        )
    }

    return (
        <>
            <CustomizedDialogs
                onClose={props.handleDiscountClose}
                title="Discount"
                typeOfDialog="discount"
                errMsg=""
                content={renderDiscount()}
                btnTitle="Apply Discount"
                closebtn="Cancel"
                selectedStudent={discount}
                onSelect={handleApplyDiscount}
            />
            {
                isApplied && <AlertDialog
                    onClose={() => {
                        setIsApplied(false)
                        setSelectMsg('');
                    }}
                    msg={selectMsg}
                    title="Discount"
                    isSuccess={isApplied}
                    msgMore={""}
                    isLoading={false}
                    open={isApplied}
                    isConfirm={false}
                    paymentMethod="eftpos"
                />
            }
        </>


    )
}