import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalRoutes } from './global/layout/GlobalRoutes';
import { CssBaseline } from '@mui/material';
import LoginPage from './components/Login/Login';
import { useDispatch } from 'react-redux';
import { fetchData, fetchProductData } from './store/actions/categoryActions';
import { AppDispatch } from './store/store';
import { setAccessToken } from './auth/HttpRequestInterceptor';
import { useNavigate } from 'react-router-dom';
import { School, selectSchool } from './store/reducers/selectedSchoolSlice';
import { Helmet } from "react-helmet";

interface LocalStorageChangedEvent extends Event {
	key: string;
}

export const createLocalStorageChangeEvent = (key: string): LocalStorageChangedEvent => {
	const event = new Event('localStorageChanged') as LocalStorageChangedEvent;
	event.key = key;
	return event;
};

const theme = createTheme({
	palette: {
		primary: {
			main: '#f5365c'
		},
		secondary: {
			main: '#2db1e6'
		},
	},
	typography: {
		htmlFontSize: 18
	}
});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('jwt') !== null) {
			//const accessToken = localStorage.getItem('jwt');
			// if (isTokenExpired(accessToken!)) {
			// 	navigate("/login")
			// } else {

			// }	
			setAccessToken(localStorage.getItem('jwt'));
			const schoolDetailJson = localStorage.getItem('schoolMeta');
			if (schoolDetailJson) {
				const schoolDetails: School = JSON.parse(schoolDetailJson);
				dispatch(selectSchool({
					schoolId: schoolDetails?.schoolId,
					schoolName: schoolDetails?.schoolName
				}))
			}
			// Reload the page
			setIsLoggedIn(true);
			navigate('/home')
		}

		const handleLocalStorageChange = (event: Event) => {
			const customEvent = event as LocalStorageChangedEvent;
			if (customEvent.key === 'jwt') {
				if (localStorage.getItem('jwt') !== null) {
					// Reload the page
					setIsLoggedIn(true);
					navigate('/home')
				}
				// Check if jwt item is removed
				if (!localStorage.getItem('jwt')) {
					// Reload the page
					setIsLoggedIn(false);
					navigate('/login')
				}
			}
		}
		window.addEventListener('localStorageChanged', handleLocalStorageChange);
		// Cleanup the event listener on component unmount
		return () => {

			window.removeEventListener('localStorageChanged', handleLocalStorageChange);
		}
	}, [])

	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				// Dispatch the fetchData async thunk action
				//  await dispatch(fetchPOSConfig()).unwrap();
				await dispatch(fetchData()).unwrap();
				await dispatch(fetchProductData()).unwrap();

			} catch (error) {
				console.error('Error fetching data:', error);
				//@ts-ignore
				console.error(error.response);
			}
		};

		if (isLoggedIn) {
			fetchDataAsync();
		}
	}, [dispatch, isLoggedIn]);

	return (
		<ThemeProvider theme={theme}>
			{isLoggedIn ?
				<div>
					<Helmet><style>{'body { background-color: white; }'}</style></Helmet>
					<CssBaseline />
					<GlobalRoutes />
				</div>
				:
				<>
					<Helmet><style>{'body { background-color: #172b4d; }'}</style></Helmet>
					<LoginPage />
				</>
			}
		</ThemeProvider>

	);
}

export default App;
