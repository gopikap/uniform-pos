import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledItemCardProps {
    isodd: string;
}

export const StyledItemCard = styled(Card)<StyledItemCardProps>(({ isodd }) => ({
    padding: '5px',
    margin: '5px',
    maxWidth: '250px',
    
    //maxHeight:'160px',
    height:'180px',
    borderRadius: '10px',
    backgroundColor: isodd ==="random1" ? '#11CDEF' : (isodd ==="random2" ?  '#2DCE89' : '#8965E0'),
    cursor: 'pointer'
}));

export const StyledCategoryItemCard = styled(Card)<StyledItemCardProps>(({ isodd }) => ({
    padding: '5px',
    margin: 'auto',
    maxWidth: '250px',
    height:'100px',
    borderRadius: '10px',
    backgroundColor: isodd ==="random1" ? '#4cc889' : (isodd ==="random2" ?  '#60c9f6' : '#92a0ef'),
    cursor: 'pointer'
}));

export const MenuItemCard = styled(Card)({
    padding: '0px',
    margin: '0px',
    width: '100px',
    height: '90px',
    borderRadius: '10px',
    backgroundColor: '#F25165',
    cursor: 'pointer'
});

export const MenuItemContent = styled(CardContent)(({ theme }) => ({
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding:'0 !important',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.up('sm')]: {
        fontSize:'10px'
    },
}));

export const StyledItemContent = styled(CardContent)(({ theme }) => ({
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding:0, 
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
}));

export const StyledCategoryItemContent = styled(CardContent)(({ theme }) => ({
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding:'10px',
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100px'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize:'18px'
    },
}));

export const StyledProductName = styled(Typography)(({ theme }) => ({
    overflow:'hidden',
    // width:'100px',
    textOverflow:'ellipsis',
    
}));
