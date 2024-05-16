import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { InputBase, Menu, MenuItem, alpha, Box, Toolbar, List, Typography, Divider, IconButton, Autocomplete, TextField, Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Student, removeStudent, selectSelectedStudent, selectStudent } from '../../store/reducers/selectedStudentSlice';
import { fetchStudentSpendLimit, studentsSearch } from './SharedApis';
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { AppDispatch } from '../../store/store';
import CloseIcon from '@mui/icons-material/Close';
import BarcodeScanner from './BarcodeScanner';
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});

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
       // marginLeft: theme.spacing(3),
        width: 'auto',
    },
    // display: 'flex',
    // flexDirection:'column',
    // alignItems: 'center',
    //justifyContent:'space-evenly'
    // border:'1px solid black'
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
    '& .MuiAutocomplete-root': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(5em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface SearchProps {
    onChange: (e: any) => void;
    options: Array<any>
    onSelect: (selectedVal: any) => void,
    onStudentSelect: (selectedVal: any) => void,
    onCardClick: (selectedVal: any) => void
}

export default function SearchContainer(props: SearchProps) {
    const [student, setStudent] = useState<Student | null>(null);
    const [studentId, setStudentId] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const selectedStudentFromState = useSelector(selectSelectedStudent);

    useEffect(() => {
        if (selectedStudentFromState.studentId !== 0) {
            const selectedStudent = selectedStudentFromState;
            var studentSelected: Student = {
                id: selectedStudent.studentId,
                firstName: selectedStudent.firstName,
                lastName: selectedStudent.lastName,
                spendLimit: selectedStudent.spendLimit,
                balance: selectedStudent.balance,
                allergies: selectedStudent.allergies,
                email: selectedStudent.email,
                imgSrc: '',
                noSpendLimitSet:selectedStudent.nospendLimitSet
            }
            setStudent({ ...studentSelected })
        }
    }, [])

    const onEnter = (e: any) => {
        if (e.key === "Enter") {
          e.target.blur();
        }
    };

    const getStudentValues = async (selectedValue: any) => {
        if (selectedValue !== null) {
            const studentBalance = await fetchStudentSpendLimit(selectedValue.id);
            const updatedValue = selectedValue;
            if (studentBalance !== null && studentBalance.hasOwnProperty("studentSpendLimit")) {
                updatedValue.spendLimit = studentBalance["studentSpendLimit"].spendLimit - studentBalance["studentSpendLimit"].totalSpentToday;
                updatedValue.balance = studentBalance["parentBalance"].balance;
                updatedValue.noSpendLimitSet= studentBalance["studentSpendLimit"].noSpendLimitSet;
            }
            setStudent(updatedValue);
            return updatedValue;
        }
    }

    const handleOnSelect = async (e: any, selectedValue: any) => {        
        if (selectedValue !== null) {
            const updatedValue = await getStudentValues(selectedValue);
            props.onSelect(updatedValue);
        }
    }


    const handleRemoveStudent = () => {
        if (window.confirm("Are you sure you want to remove student?")) {
            dispatch(removeStudent());
            setStudent({ ...selectedStudentFromState, id: 0 })
            props.onSelect(null);
        } else {
            return false;
        }
    }

    const handleBarcodeValue = async (val: string) => {
        setStudentId(val);
        //call api to select student
        const searchStudentById =  await studentsSearch(val);
        if (searchStudentById && Array.isArray(searchStudentById) &&  searchStudentById.length > 0 ) {
            const selectedStudentVal = await getStudentValues(searchStudentById[0])
            props.onStudentSelect(selectedStudentVal);
        }
    }

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setStudentId(event.target.value);
        //call api to select student
        const searchStudentById =  await studentsSearch(event.target.value);
        if (searchStudentById && Array.isArray(searchStudentById) &&  searchStudentById.length > 0 ) {
            const selectedStudentVal = await getStudentValues(searchStudentById[0])
            props.onStudentSelect(selectedStudentVal);
        }        
    }
    
    const renderStudent = () => {
        return (
            <>
                <Card sx={{ maxWidth: 500 , marginTop:2 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <CloseIcon onClick={handleRemoveStudent} />
                            </IconButton>
                        }
                        title="Student Details"
                    />
                    <div style={{display:'flex', flexDirection:'row'}} onClick={() => props.onCardClick(student)}>
                        <CardMedia component="img" height="180" style={{width:'40%'}} image={student?.imgSrc ? 'props.selectedStudent.imgSrc' : 'https://cdn-icons-png.flaticon.com/512/219/219970.png'} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {student?.firstName} {student?.lastName}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                <span style={{ fontWeight: 'bold' }}>Available Balance</span>: <span>{fm.from(student?.balance)}</span>
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                <span style={{ fontWeight: 'bold' }}>Daily Spend Limit</span>: <span>{ student?.noSpendLimitSet === true ? "No Limit" : fm.from(student?.spendLimit)}</span>
                            </Typography>

                        </CardContent>
                    </div>
                </Card>
            </>

        )
    }


    return (
        <>
            <Search>
                <BarcodeScanner scanValue={handleBarcodeValue} />
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <TextField
                        margin="normal"
                        id="studentId"
                        label="Student ID"
                        name="studentID"
                        autoFocus
                        value={studentId}
                        onChange={handleChange}
                        style={{margin:0}}
                    />
                    <p style={{marginLeft:10, marginRight:10}}>OR</p>
                    <Autocomplete
                        id="combo-box-demo"
                        freeSolo                        
                        getOptionLabel={(option: any) => (option.firstName || option.lastName) ? option.firstName + " " + option.lastName : ""}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={props.options}
                        value={student !== null ? student : 0}
                        onChange={handleOnSelect}
                        onInputChange={props.onChange}
                        sx={{ width: 300}}
                        renderInput={(params) => <TextField {...params} label="Start typing student first or last name..." />}
                        onKeyUp={onEnter}
                    />
                </div>

            </Search>
            {student && student.id > 0 && renderStudent()}
        </>

    )
}