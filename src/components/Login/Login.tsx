import React, { useState } from 'react';
import {
    Checkbox,
    TextField,
    FormControlLabel,
    Button,
    CircularProgress,
    Container,
    Box,
    Typography,
    InputAdornment,
    IconButton
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormError } from '../Shared/Styles/FormsStyle';
import { createLocalStorageChangeEvent } from '../../App';
import Axios from 'axios';
import { AppSettings } from '../../AppSettings';
import { ToastContainer, toast } from 'react-toastify';
import { setAccessToken } from '../../auth/HttpRequestInterceptor';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { School, selectSchool } from '../../store/reducers/selectedSchoolSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import LockOpenIcon from '@mui/icons-material/LockOpen';

interface LoginUser {
    username: string;
    password: string
}

const LoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ name: '', message: '' });
    const dispatch = useDispatch<AppDispatch>();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('password is required'),
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'loggedIn') setChecked(event.target.checked);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const formik = useFormik<LoginUser>({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            console.log("onSubmit -> ", JSON.stringify(values, null, 2))
            try {
                var requestData = {
                    username: values.username,
                    password: values.password
                  }
                // const response = await Axios.post(`${AppSettings.ApiBaseUrl}/Auth`, requestData);
                // console.log(response);
                // localStorage.setItem("jwt", response.data.authToken);
                // localStorage.setItem("schoolMeta", JSON.stringify(response.data.metadata));
                // const schoolDetails:School = response.data.metadata;
                // dispatch(selectSchool({
                //     schoolId: schoolDetails.schoolId,
                //     schoolName: schoolDetails.schoolName
                // }))
                // setAccessToken(response.data.authToken);
                localStorage.setItem("jwt", "TOBEREMOVED");
                 localStorage.setItem("schoolMeta", JSON.stringify({
                    schoolId: 65,
                    schoolName: "DEMO SCHOOL"
                }));
                setAccessToken("TOBEREMOVED");
                dispatch(selectSchool({
                    schoolId: 65,
                    schoolName: "DEMO SCHOOL"
                }))

                const event = createLocalStorageChangeEvent("jwt")
                window.dispatchEvent(event);
            } catch (e: any) {
                console.log("Error", e);
                setErrorMsg({name:"Error", message:e.response.data.error})
                toast(e.response.data.error);
            }    
            setIsLoading(false);
        }
    })

    const renderErrorMessage = (name: string) =>
        name === errorMsg.name && (
            <FormError>{errorMsg.message}</FormError>
        );

    return (
        <div>
            <div style={{marginTop:'30px', marginLeft:'30px'}}>
                <img height={30} src='https://www.school24.net.au/canteenadmin/assets/img/School24-Logo-Large-white.png' />
            </div>
            <div style={{marginTop:'30px', marginLeft:'30px',padding:'30px' ,color:'#ffff', display:'flex', flexDirection:'column'}}>
                <Typography variant='h4' style={{margin:'0 auto'}}>School24 Uniform POS</Typography>
                <Typography variant='h6' style={{margin:'0 auto'}}>Welcome!</Typography>
            </div>        
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background:'#ffffff',
                    width:'50%',
                    margin: '0 auto',
                    padding:'25px'
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={formik.handleSubmit} >
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailIcon />
                                  </InputAdornment>
                                ),
                              }}  

                            
                        />
                        {formik.errors.username && (<FormError>{formik.errors.username}</FormError>)}
                        {renderErrorMessage('username')}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'password' : 'text'}
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>,
                                startAdornment: (
                                    <InputAdornment position="start">
                                      <LockOpenIcon />
                                    </InputAdornment>
                                  ),
                            }
                        }
                        />
                        {formik.errors.password && (<FormError>{formik.errors.password}</FormError>)}
                        {renderErrorMessage('password')}        
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Button
                                type="submit"                            
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor:'#5e72e4' }}
                            >
                                Sign In
                            </Button>
                            {isLoading && <CircularProgress /> }  
                        </div>                
                        
                        
                    </Box>
                </form>     
                <ToastContainer />       
            </Box>
        {/* // </Container >         */}
        </div>
    );
};

export default LoginPage;

