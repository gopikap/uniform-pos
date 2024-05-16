import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

interface AlertProps {
    open: boolean,
    msg: string,
    msgMore: string
    onClose: () => void;
    isLoading: boolean,
    isConfirm: boolean,
    isSuccess?: boolean,
    onConfirm?: () => void
    title?: string,
    paymentMethod?: string
}

export default function AlertDialog(props: AlertProps) {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold' }} id="customized-dialog-title">
                {props.title}
            </DialogTitle>
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
            <DialogContent dividers>
                <div style={{display:'flex', alignItems:'center'}}>                
                    <Typography variant='h5' style={{ display: 'flex', alignItems: 'center' }}>{props.msg} {props.msgMore} {props.isSuccess && props.msg !== "" && <CheckCircleOutlineIcon fontSize='large' color='success' sx={{ marginLeft: '10px' }} />}</Typography>
                    {props.isLoading && <CircularProgress />}
                </div>
                
            </DialogContent>
            <DialogActions>
                {!props.isConfirm && props.paymentMethod?.toLowerCase() !== "eftpos" &&
                    <Button onClick={props.onClose} autoFocus variant='contained'>
                        Ok
                    </Button>
                }
                {props.isConfirm &&
                    <>
                        <Button onClick={props.onConfirm} sx={{ background: '#47CE89' }} autoFocus variant='contained'>
                            Confirm
                        </Button>
                        <Button onClick={props.onClose} autoFocus variant='contained'>
                            Cancel
                        </Button>
                    </>
                }
            </DialogActions>
        </Dialog>
    );
}
