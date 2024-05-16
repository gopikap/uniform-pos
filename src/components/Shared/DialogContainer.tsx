import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';

interface CustomDialogProps {
    onClose: () => void;
    title: string,
    content: any,
    btnTitle: string,
    closebtn: string,
    extraBtn?: string,
    typeOfDialog: string,
    selectedStudent?: any,
    onSelect: (selected: any) => void,
    isLoading?: boolean,
    errMsg: string,
    responseMsg?:string,
    isProcessed?:boolean,
    isFullWidth?:boolean
}

export default function CustomizedDialogs(props: CustomDialogProps) { 
    return (
        <div>
            <Dialog
                onClose={props.onClose}
                aria-labelledby="customized-dialog-title"
                open={true}
                maxWidth="md"
                disableRestoreFocus
                {...(props.typeOfDialog === "product" || props.isFullWidth) && {fullWidth:true} }
                //fullWidth={true}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold' }} id="customized-dialog-title">
                    {props.title}
                </DialogTitle>
                {props.typeOfDialog !== "product" &&
                    <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                <DialogContent dividers {...(props.typeOfDialog === "discount") && { style: {paddingTop: 0}} }>
                    {props.content}                    
                </DialogContent>
                <DialogActions>
                    {props.isLoading && <CircularProgress />}
                    {props.errMsg !== '' && <span style={{ color: 'red' }}>{props.errMsg}</span>}
                    {props.responseMsg !== '' && <span style={{ color: 'green', fontSize:'20px', marginRight:'20px' }}>{props.responseMsg}</span>}
                    {!props.isProcessed && props.typeOfDialog !== 'discount' &&
                        <Button variant="contained" sx={{ background: '#47CE89', fontSize: 15 }} autoFocus onClick={() => props.onSelect(props.selectedStudent)} disabled={props.selectedStudent === null || (props.selectedStudent && props.selectedStudent.studentId === 0)}>
                            {props.btnTitle}
                        </Button>
                    }                    
                    {props.typeOfDialog === 'discount' &&
                        <Button variant="contained" sx={{ background: '#47CE89', fontSize: 15 }} autoFocus onClick={() => props.onSelect(props.selectedStudent)}>
                            {props.btnTitle}
                        </Button>
                    }
                    {props.extraBtn && props.extraBtn !== "" &&
                        <Button variant="contained" sx={{ background: '#47CE89', fontSize: 15 }} autoFocus onClick={() => props.onSelect("onClose")}>
                            {props.extraBtn}
                        </Button>
                    }
                    {
                        !(props.isProcessed && (props.typeOfDialog === "etfpos" || props.typeOfDialog === "parentBalance")) ?
                        <Button variant="contained" sx={{ background: props.isProcessed ? '#47CE89' : '#f5365c', fontSize: 15 }} autoFocus onClick={props.onClose}>
                            {props.closebtn}
                        </Button> : ''
                    }
                    
                </DialogActions>
            </Dialog>
        </div>
    );
}