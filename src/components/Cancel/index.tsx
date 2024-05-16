import { Table, TableHead, TableRow, Typography, TableContainer, TableCell, TableBody, Paper, CircularProgress, Button, IconButton, Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import { AppSettings } from "../../AppSettings";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import PreviewIcon from '@mui/icons-material/Preview';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CustomizedDialogs from "../Shared/DialogContainer";
import AlertDialog from "../Shared/AlertDialog";

interface Aggregates {
    numberOfSales: number,
    totalSales: number,
    totalRefunds: string,
    totalCash: number,
    totalEftpos: number,
    totalBalance: number
}

interface OrderObject {
    id: number,
    orderAmountDisplay: string,
    orderDate: string,
    orderTime: string,
    orderItems: Array<any>,
    orderNumber: string,
    parentName: string,
    paymentMethod: string,
    studentName: string,
    orderAmount: number,
    hasCancelledOrders: boolean
    discountPercentage?:number,
    discountAmount?:number,
    orderAmountWithoutDiscount?: number   
    orderAmountWithoutDiscountDispay: string 
}

const CancelPage = () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [aggregates, setAggregates] = useState<Aggregates>();
    const [data, setData] = useState<Array<OrderObject>>([]);
    const [selectedRow, setSelectedRow] = useState<OrderObject>();
    const [errMsg, setErrMsg] = useState('');
    const [responseMsg, setResponseMsg] = useState('');
    const [isRefund, setIsRefund] = useState(false);
    const [isListRefund, setIsListRefund] = useState(false);
    const [confirmRefund, setConfirmRefund] = useState(false);
    const [refundMsg, setRefundMsg] = useState('Are you sure you would like to refund this sale?');
    const [paymentType, setPaymentType] = useState('cash');
    useEffect(() => {
        try {
            fetchOrderData()
        } catch (error) {
            console.log("Error", error)
        }
    }, [])

    const fetchOrderData = async () => {
        try {
            const selectedDate = dayjs(value).format("YYYY-MM-DD");
            setIsLoading(true);
            const response = await Axios.get(`${AppSettings.ApiBaseUrl}/Orders/` + selectedDate);
            if (response && response.data) {
                setIsRefund(true)
                setIsLoading(false);
                const data = response.data;
                
                if (data.hasOwnProperty("orders")) {
                    setData(data.orders);
                }
                
                if (data.hasOwnProperty("saleSummary")) {
                    setAggregates(data.saleSummary);
                }
                
            }
        } catch (error) {
            setIsLoading(false);
            return JSON.stringify(error);
        }
    }

    const renderViewOrder = () => {        
        return (
            <div>
                <Table>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Sale Number</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{selectedRow?.orderNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>{
                             //@ts-ignore 
                        ((selectedRow?.hasCancelledOrders === true || isRefund) && selectedRow?.orderAmount < 0) ? "Refund Date" : "Sale Date"}</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{dayjs(selectedRow?.orderDate,"D-M-YYYY").format("DD-MM-YYYY") }</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Payment Method</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{selectedRow?.paymentMethod.toUpperCase()}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Discount Applied</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>
                    {
                         //@ts-ignore 
                        selectedRow?.discountPercentage && selectedRow?.discountPercentage > 0 && selectedRow?.discountPercentage+"%"
                    }
                    {
                         //@ts-ignore 
                        selectedRow?.discountAmount && selectedRow?.discountAmount > 0 && "$"+selectedRow?.discountAmount.toFixed(2)
                    }
                        </TableCell> 
                    </TableRow>
                    
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Transaction Type</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{
                            //@ts-ignore 
                            selectedRow?.orderAmount < 0 ? "REFUND" : "SALE"}                            
                            {//@ts-ignore
                            (selectedRow?.orderAmount > 0 && (selectedRow?.hasCancelledOrders === true || isRefund)) && " (Refund Processed)"
                            }
                        </TableCell>
                    </TableRow>                    
                    
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Student Name</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{selectedRow?.studentName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Parent Name</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>{selectedRow?.parentName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontSize: '18px' }}>Sale Items</TableCell>
                        <TableCell sx={{ fontSize: '18px' }}>
                            <Table sx={{ padding: 0, margin: 0 }}>
                                {
                                    selectedRow?.orderItems.map((row) => (
                                        <TableRow
                                            key={row.orderItemId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontSize: '18px', paddingLeft:0 }}>
                                                {row.productName}
                                            </TableCell>
                                            <TableCell align="left" sx={{ fontSize: '18px' }}>{row.optionNames}</TableCell>
                                            <TableCell align="left" sx={{ fontSize: '18px' }}>{row.amountDisplay}</TableCell>
                                            <TableCell align="left" sx={{ fontSize: '18px' }}>{row.orderedQuantity}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </Table>
                        </TableCell>
                    </TableRow>
                    {
                        (selectedRow?.discountAmount !== null || selectedRow?.discountPercentage !== null) &&
                        <>
                        <TableRow>
                            <TableCell sx={{ fontSize: '18px' }}>Sub Total</TableCell>
                            <TableCell sx={{ fontSize: '18px' }}>
                                {selectedRow?.orderAmountWithoutDiscountDispay}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontSize: '18px' }}>Total</TableCell>
                            <TableCell sx={{ fontSize: '18px' }}>
                                {selectedRow?.orderAmountDisplay}
                            </TableCell>
                        </TableRow>
                        </>
                    }
                    {
                        (selectedRow?.discountAmount === null && selectedRow?.discountPercentage === null) &&
                        <TableRow>
                            <TableCell sx={{ fontSize: '18px' }}>Total</TableCell>
                            <TableCell sx={{ fontSize: '18px' }}>
                                {selectedRow?.orderAmountDisplay}
                            </TableCell>
                        </TableRow>
                    }
                </Table>
            </div>
        )
    }

    const handleRefundConfirm = (order: OrderObject) => {
        var selectedRowVal = order !== undefined ? order : selectedRow;
        if (selectedRowVal !== undefined) {            
            if (selectedRowVal.paymentMethod.toLowerCase() === 'eftpos') {
                var msg = 'Process a '+ selectedRowVal.orderAmountDisplay+" refund on your EFTPOS terminal to refund this sale."                
                setRefundMsg(msg);                
            }
            if (selectedRowVal.paymentMethod.toLowerCase() === 'balance' || selectedRowVal.paymentMethod.toLowerCase() === 'cash') {                
                setRefundMsg('Are you sure you would like to refund this sale?');
            }
            setPaymentType(selectedRowVal.paymentMethod.toLowerCase());
            setSelectedRow(selectedRowVal);
        } else {
            setSelectedRow(selectedRowVal)
        }        
        setConfirmRefund(true);
    }
    const handlerefundOrderList = async () => {
        setConfirmRefund(false);
        try {
            if (selectedRow) {
                setIsLoading(true);
                setIsListRefund(true)
                const response = await handleRefundProductProcess(selectedRow);
                //@ts-ignore
                if (response && response.data) {
                    setIsLoading(false);
                    setIsRefund(true);
                    if (selectedRow?.paymentMethod.toLowerCase() === "cash") {
                        //@ts-ignore
                        setResponseMsg("Cash refund due: $" + Math.abs(response.data.orderAmount));
                    }
                    if (selectedRow?.paymentMethod.toLowerCase() === "eftpos") {
                        //@ts-ignore
                        setResponseMsg("Refund processed successfully.");
                    }
                    if (selectedRow?.paymentMethod.toLowerCase() === "balance") {
                        //@ts-ignore
                        setResponseMsg("The sale amount of $" + Math.abs(response.data.orderAmount).toFixed(2) + " has been credited back to "+ selectedRow.studentName +"'s account balance.");                         
                    }
                    if (selectedRow?.paymentMethod.toLowerCase() === "eftpos") {
                        setTimeout(async () => {
                            setIsListRefund(false);                            
                        }, 4000)
                    }
                    await fetchOrderData();                    
                }
            }

        } catch (error) {
            setIsLoading(false);
        }
    }    
    
    const handleRefundProductProcess = async (selectedRow: OrderObject) => {
        try {

            var mapOrderItems = (selectedRow?.orderItems || []).reduce((result, item) => {
                    if (item.productId > 1) {
                        result.CancelPosOrderItems.push({
                            productIdToCancel: item.productId,
                            quantityToCancel: item.orderedQuantity,
                        });
                    } else if (item.productId < 1) {
                        result.CancelCustomSaleOrderItems.push({
                            OrderItemId: item.orderItemId,
                            quantityToCancel: item.orderedQuantity,
                        });
                    }
                    return result;
                }, { CancelPosOrderItems: [], CancelCustomSaleOrderItems: [] });
            console.log(mapOrderItems);
            var refundRequest = {
                posOrderId: selectedRow?.id,
                cancelPosOrderItems: [...mapOrderItems.CancelPosOrderItems],
                CancelCustomSaleOrderItems: [...mapOrderItems.CancelCustomSaleOrderItems]

            }
            const response = await Axios.post(`${AppSettings.ApiBaseUrl}/orders/cancel`, refundRequest);
            setResponseMsg('');
            return response;
        } catch (error) {
            setIsLoading(false);
            setIsRefund(false);
            console.log(error)
            //@ts-ignore
            if (error && error.response && error.response.status === 400) {
                //@ts-ignore
                setErrMsg(error.response.data.error)
            } else {
                console.log(error);
                //@ts-ignore
                setErrMsg(error.toString())
            }
            setResponseMsg('');
            return JSON.stringify(error);
        }
    }

    function handleSelectedRow(orderNumber: OrderObject): void {
        //@ts-ignore
        setSelectedRow(orderNumber);
        if (orderNumber.orderAmount < 0 || orderNumber.hasCancelledOrders) {
            setIsRefund(true)
        } else {
            setIsRefund(false);
        }
        setResponseMsg('');
        setOpen(true)
    }

    const formatOrderAmt = (orderAmt: number, displayAmt: string) => {
        if (orderAmt < 0) {
            let format = displayAmt.replace("(", "(-");
            return format
        } else {
            return displayAmt
        }
    }

    const formatTotalRefunds = (orderAmt: any) => {        
        if (orderAmt !== undefined &&  orderAmt.includes('(')) {
            let format = orderAmt.replace(/[()]/g, '');;
            return format
        } else {
            return orderAmt
        }
    }

    return (
        <>
            <Typography variant="h5" sx={{ paddingLeft: '10px' }}> Transactions/Refund </Typography>
            <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Sale Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                format="DD-MM-YYYY"
                            />
                        </LocalizationProvider>
                        <Button variant="contained" color="primary" sx={{ marginLeft: '20px' }} onClick={fetchOrderData}>Submit</Button>
                        {isLoading && <CircularProgress sx={{ marginLeft: '20px' }} />}
                    </div>  
                    <div style={{marginLeft: '50px', marginRight:'100px', borderRadius:'5px', border:'1px solid lightgray'}}>
                        <Table size="small" aria-label="a dense table">
                            <TableRow>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Number of Sales:</Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"><span style={{color:"green"}}>{aggregates?.numberOfSales}</span></Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Total Sales:</Typography> </TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"><span style={{color:"green"}}>{formatTotalRefunds(aggregates?.totalSales)}</span></Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Total Refunds:</Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"><span style={{color:"green"}}>{formatTotalRefunds(aggregates?.totalRefunds)}</span></Typography></TableCell>
                            </TableRow>
                            <TableRow>                                
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Total Cash:</Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"> <span style={{color:"green"}}>{formatTotalRefunds(aggregates?.totalCash)}</span></Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Total EFTPOS: </Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"><span style={{color:"green"}}>{formatTotalRefunds(aggregates?.totalEftpos)}</span></Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5">Total Balance: </Typography></TableCell>
                                <TableCell sx={{border:0, padding:'2px 7px'}}><Typography variant="h5"><span style={{color:"green"}}>{formatTotalRefunds(aggregates?.totalBalance)}</span></Typography></TableCell>
                            </TableRow>
                        </Table>                        
                    </div>
                </div>
                {data.length > 0 ?
                    <Box sx={{ overflow: "auto" , marginTop:'15px' }}>
                        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }}  size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Sale Number</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Sale Amount</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Payment Type</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold'}}>Transaction Type</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Student Name</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Parent Name</TableCell>
                                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((row) => (
                                            <TableRow
                                                key={row.orderNumber}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                                                    {row.orderNumber}
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                                                  {dayjs(row.orderDate, "D-M-YYYY").format("DD-MM-YYYY")}
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                                                    {row.orderTime}
                                                </TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>{formatOrderAmt(row.orderAmount, row.orderAmountDisplay)}</TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>{row.paymentMethod.toUpperCase()}</TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>
                                                    {row.orderAmount < 0 ? "REFUND" : "SALE" }
                                                </TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>{row.studentName}</TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>{row.parentName}</TableCell>
                                                <TableCell align="left" sx={{ fontSize: '18px' }}>
                                                    <IconButton>
                                                        <PreviewIcon style={{fontSize: 40}} fontSize="large" color="primary" onClick={() => handleSelectedRow(row)} />
                                                    </IconButton>
                                                    {
                                                        row.orderAmount >= 0 && !row.hasCancelledOrders &&
                                                        <IconButton onClick={() => handleRefundConfirm(row)}>
                                                            <MoneyOffIcon style={{fontSize: 40}} fontSize="large" color="primary" />
                                                        </IconButton>
                                                    }

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                    : <Typography variant="h6">No orders for this date</Typography>
                }
            </div>

            {open && <CustomizedDialogs
                onClose={() => {                    
                    setOpen(false)
                    setIsRefund(false);
                    setResponseMsg('');
                    setErrMsg('');                    
                }
                }
                title="Sale Details"
                typeOfDialog="student"
                errMsg={errMsg}
                responseMsg={responseMsg}
                content={renderViewOrder()}
                btnTitle="Refund"
                isProcessed={isRefund}
                closebtn={isRefund ? "Refund Processed" : "Cancel"}
                onSelect={handleRefundConfirm}
                isLoading={isLoading}
            />
            }
            {
                isListRefund && <AlertDialog
                    onClose={() => {
                        setRefundMsg('');
                        setIsListRefund(false)
                        setResponseMsg('');
                        setErrMsg('');
                        setRefundMsg('');
                    }}
                    msg={responseMsg}
                    msgMore={errMsg}
                    isLoading={isLoading}
                    open={isListRefund}
                    isConfirm={false}
                    isSuccess={true}
                    title="Refund"
                    paymentMethod={paymentType}
                />
            }
            {
                confirmRefund && <AlertDialog
                    onClose={() => {
                        setConfirmRefund(false)
                        setRefundMsg('');
                        setResponseMsg('');
                        setErrMsg('');
                    }}
                    msg={refundMsg}
                    msgMore={""}
                    isLoading={false}
                    open={confirmRefund}
                    isConfirm={true}
                    title="Refund"
                    onConfirm={handlerefundOrderList}
                    paymentMethod={paymentType}
                />
            }

        </>


    )
}

export default CancelPage;


