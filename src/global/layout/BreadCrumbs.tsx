import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { selectCategory } from '../../store/reducers/selectedCategorySlice';



export default function BasicBreadcrumbs() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { pathname, search, state } = location;   
    const dispatch = useDispatch<AppDispatch>();
    const selectedCategory = useSelector((state: RootState) => state.selectedCategory.catId);
    
    React.useEffect(() => {
        if(pathname === "/") {
            dispatch(selectCategory(0))
        }
    },[pathname])

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {        
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                {/* <NavLink color="inherit" to="/">
                    HOME
                </NavLink> */}
                {/* {
                    selectedCategory && <NavLink
                    color="inherit"
                    to="/categories"
                >
                    Categories
                </NavLink>
                } */}
                {/* 
                <Typography color="text.primary">Breadcrumbs</Typography> */}
            </Breadcrumbs>
        </div>
    );
}