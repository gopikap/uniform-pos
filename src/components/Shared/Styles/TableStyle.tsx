import { Button,  CardContent, Checkbox, Radio, Table, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableHeadCell = styled(TableCell)({
   fontSize:"30px",
   fontWeight:'bold'
});

export const StyledroductNameTableCell = styled(TableCell)({
    fontSize:"17px",
    fontWeight:'bold',
    padding:8,
    width:'200px'
});

export const StyledTableCell = styled(TableCell)({
    fontSize:"17px",
    fontWeight:'bold',
    padding:8
});

export const StyledRadio = styled(Radio)({
    '&.Mui-checked': {
        color: '#47CE89'
    }
});
export const StyledRadioDiscount = styled(Radio)({
    '.MuiTypography-root': {
        fontSize: '18px'
    }
});
export const StyledCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: '#47CE89'
    }
});


export const StyledButton = styled(Button)({
    padding:'10px',
    backgroundColor:'#7c8ce8',
    minWidth:'92px'
});

export const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
});
export const StyledNumberButton = styled('button')({
    height: '60px',
    width: '60px',
    fontSize: '25px',
    marginRight:'5px',
    padding:0,
    marginBottom:'5px',
    color:'black'
});
// export const StyledNumberButton = styled('button')({
//     height: '60px',
//     fontSize: '25px',
//     marginRight: '5px',
//     padding: '0 15px', // Adjust padding as needed
//     marginBottom: '5px',
//     color: 'black',
//     whiteSpace: 'nowrap',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// });

export const StyledClearButton = styled('button')({
    height: '35px',
    width: '75px',
    fontSize: '20px',
    marginRight:'5px',
    marginBottom:'5px'
});
export const StyledSpan = styled('span')({
    color:'#5A5A5A',
    fontSize: '15px'
});


export const StyledTable = styled(Table)({
    fontSize: '20px',
    minWidth:'400px'
});

export const StyledItemContent = styled(CardContent)({
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold '
});
