import React,{useEffect, useRef, useState} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Menu, MenuItem, alpha, Box, Toolbar, List, Typography, Divider, IconButton, Autocomplete, TextField } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { createLocalStorageChangeEvent } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryData, selectProductData, selectPosConfigData } from '../../store/reducers/categorySlice';
import { AppDispatch, RootState } from '../../store/store';
import { Category } from '../../components/Dashboard';
import MenuCard from '../../components/Shared/MenuCard';
import BasicBreadcrumbs from './BreadCrumbs';
import { clearCategory, resetCategory, selectCategory } from '../../store/reducers/selectedCategorySlice';
import { resetStudentData, selectSelectedStudent } from '../../store/reducers/selectedStudentSlice';
import CartContainer from '../../components/CartContainer';
import { resetCartData, resetDiscount } from '../../store/reducers/cartSlice';
import { resetProductData } from '../../store/reducers/selectedProductSlice';
import { resetSchool, selectedSchool } from '../../store/reducers/selectedSchoolSlice';
import CustomSaleContainer from '../../components/Shared/CustomSaleContainer';

interface MainLayoutProps {
    children: any
}
const drawerWidth = 200;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    //alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(Autocomplete)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-root': {
        marginLeft:'35px',
        width:'260px'
    },
    '& .MuiOutlinedInput-notchedOutline':{
        border:0
    },
    '& .MuiAutocomplete-root': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(8)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(18)} + 2px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(15)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MainLayout(props: MainLayoutProps) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openCustomSale, setOpenCustomSale] = useState(false);
    const catData = useSelector(selectCategoryData);
    const posConfigData = useSelector(selectPosConfigData);
    const dispatch = useDispatch<AppDispatch>();
    const selectedCategory = useSelector((state: RootState) => state.selectedCategory.catId);
    const selectedProducts = useSelector((state: RootState) => state.selectedProduct.productIds);
    const cartState = useSelector((state:RootState) => state.cart);
    const productList = useSelector(selectProductData);    
    const selectedSchoolState = useSelector(selectedSchool);
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const fullScreenRef = useRef(null);
    const handleHomeClick = () => {
        dispatch(clearCategory());
        navigate("/home");
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCustomSale = () => {setOpenCustomSale(!openCustomSale)};
    const handleCustomSaleClose = () => { setOpenCustomSale(false); }

    const handleOnSelect = (e: any, selectedValue: any) => {
        if (selectedValue !== null) {
            const catId = selectedValue.categoryId;
            const prodId = selectedValue.id;
            dispatch(selectCategory(catId))
            navigate('/dashboard', { state: { prodId: prodId } })            
        }      
    }

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        const event = createLocalStorageChangeEvent("jwt")
        window.dispatchEvent(event);
        setAnchorEl(null);
        dispatch(resetSchool());
        dispatch(resetCartData());
        dispatch(resetStudentData());
        dispatch(resetProductData());
        dispatch(resetCategory());
    }

    const handleClick = (catId: number) => {
        dispatch(selectCategory(catId))
    }
    
    const onEnter = (e: any) => {
        if (e.key === "Enter") {
          e.target.blur();
        }
    };   
    
    return (
        <>
            <Box sx={{ display: 'flex' }}  ref={fullScreenRef} >
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleHomeClick}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <HomeIcon fontSize='large' />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: 'black' }} />
                            </SearchIconWrapper>
                            
                            <StyledInputBase
                                id="combo-box-demo"
                                getOptionLabel={(option: any) => option.name}
                                //@ts-ignore
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                options={productList}                                
                                value={null}
                                onChange={handleOnSelect}
                                onKeyUp={onEnter}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField  {...params} placeholder="Search by products..." />}
                            />
                            {/* <StyledInputBase
                                placeholder="Search products…"
                                inputProps={{ 'aria-label': 'search' }}
                            /> */}
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography variant="h6" noWrap component="div" style={{ margin: 'auto' }}>
                            Uniform POS
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box >

                            <Typography variant="h6" noWrap component="div">
                                {selectedSchoolState.schoolName}
                            </Typography>
                        </Box>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle sx={{fontSize: '26px'}} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                            </Menu>
                        </div>
                        {/* )} */}
                    </Toolbar>
                </AppBar>
                {selectedCategory &&
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />

                        <List>
                            {catData && catData.length > 0 && catData.map((eachCat: Category, index: number) => (
                                <ListItem key={eachCat.id} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 30,
                                            justifyContent: open ? 'initial' : 'center',
                                            paddingBottom: 0,
                                            paddingTop: '2px'
                                            // px: 1.5,
                                            // paddingBotton: '0.5px'
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 5 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <MenuCard item={eachCat} onClick={() => handleClick(eachCat.id)} isSelected={eachCat.id === selectedCategory} />
                                        </ListItemIcon>
                                        {/* <ListItemText primary={eachCat.name} sx={{ opacity: open ? 1 : 0 }} /> */}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            {
                                posConfigData && posConfigData.allowCustomSale && <ListItem key="customSale" disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 30,
                                        justifyContent: open ? 'initial' : 'center',
                                        paddingBottom: 0,
                                        paddingTop: '2px'
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 5 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <MenuCard item={{id: 'customSale',name: "Custom Sale"}} onClick={() => handleCustomSale()} isSelected={false} />
                                    </ListItemIcon>
                                    {/* <ListItemText primary={eachCat.name} sx={{ opacity: open ? 1 : 0 }} /> */}
                                </ListItemButton>
                            </ListItem>
                            }
                        </List>

                    </Drawer>
                }
                {/* background:'gray' */}
                <Box component="main" sx={{ flexGrow: 1, paddingTop: '20px', margin: 0, }}>
                    <DrawerHeader />
                    <BasicBreadcrumbs />
                    <Outlet />
                    <ToastContainer />
                </Box>
                {
                    (selectedProducts && selectedProducts.length || (cartState && (cartState.productsInCart.length > 0 || cartState.customSale.length > 0))) && (pathName !== '/cancel') && // selectedProducts.length > 0
                    <Box sx={{ flexGrow: 1, p: 1, maxWidth: 450, position: 'relative' }}>
                        <CartContainer />
                    </Box>
                }
                {openCustomSale && <CustomSaleContainer openCustomSale={openCustomSale} handleCustomSaleClose={handleCustomSaleClose}  />}
            </Box>

        </>
    );
}