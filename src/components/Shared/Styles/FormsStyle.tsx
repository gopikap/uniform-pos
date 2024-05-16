import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputField = styled(TextField)(() => ({
    paddingBottom: '20px'
}))

export const SubOption = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))

export const ListItems = styled(Box)(() => ({
    display: 'flex',
    marginBottom: '12px',
    minWidth: '600px',
    '& div': {
        marginRight:"5px"
    }
}))

export const FormError = styled(Box)(() => ({
    paddingTop: '0 !important',
    fontSize: '11px',
    color: '#e83833'
}))

export const BannerDiv = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minWidth: '400px'
}))

export const ImageContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '15px',
    alignItems: 'start',
    minWidth: '500px',
    justifyContent: 'space-between'
}))
