import { Table, TableRow, TableCell, TableBody, IconButton, Collapse, Typography, Radio, Checkbox, Button } from "@mui/material";
import { StyledCheckbox, StyledRadio, StyledTable, StyledTableCell } from "./Styles/TableStyle";
import { KeyboardArrowDown, KeyboardArrowUp, RestartAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import React from "react";
import { Option, OptionGroup, ProductAttributeCategories, ProductAttributes } from "../Dashboard";

interface OptionGrpProps {
    groupItem: ProductAttributeCategories,
    key: number,
    itemIndex:number,
    itemLength: number,
    openClose: boolean,
    selectedProduct: any,
    selectedOptions: ProductAttributes[],
    showRadioTables?:boolean,
    handleOpenClose: (val: number) => void,
    selectedOptionsChanged: (options: ProductAttributes[]) => void;
    onToggle?: () => void;
    
    showCheckTables?:boolean,
}

export const RadioOptionsTable = (props: OptionGrpProps) => {    
    const optionGroup = props.groupItem;   

    const extractSelectedOptionId = (selectedOptions: ProductAttributes[]) => {
        if (selectedOptions && selectedOptions.length > 0 && !selectedOptions.hasOwnProperty("options")) {
            const selected = selectedOptions.filter(x => (x.name === optionGroup.name));
            if (selected.length > 0)
                return selected[0].attributeId;
        }
        return -1;
    }

    const selectedOptionId = extractSelectedOptionId(props.selectedOptions);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedSelectedOptionId = parseInt(event.target.value);
        let cloneOfSelectedOptions = props.selectedOptions ? [...props.selectedOptions] : [];
        let selectedOption = optionGroup.productAttributes.find(opt => opt.attributeId === parsedSelectedOptionId);
        if (selectedOption) {
            // Create a new object with name property and assign it to selectedOption
            selectedOption = {
                ...selectedOption,
                name: optionGroup.name
            };
        }
        cloneOfSelectedOptions = cloneOfSelectedOptions.filter(x => (x.name !== optionGroup.name));
        cloneOfSelectedOptions.push(selectedOption!);
        props.selectedOptionsChanged(cloneOfSelectedOptions);
    }

    const handleResetRadio = (grpName: string) => {
        let cloneOfSelectedOptions = props.selectedOptions ? [...props.selectedOptions] : [];
        let radioOpts = cloneOfSelectedOptions.filter(x => (x.name?.toUpperCase() !== grpName.toUpperCase()));
        if (radioOpts) {
            cloneOfSelectedOptions = radioOpts
        }
        props.selectedOptionsChanged(cloneOfSelectedOptions)
    }

    const renderOption = (index: number, name: string, option: ProductAttributes): React.JSX.Element => {
        return (<TableRow key={`OptionGroup-${index}`}>
            <StyledTableCell width={150}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    {option.name}
                    {/* {!option.required && <span style={{fontSize:'11px',color:'#E21818'}}>(optional)</span> } */}
                </div>
            </StyledTableCell>
            <StyledTableCell width={150}>
                <StyledRadio value={option.attributeId} name={name} checked={selectedOptionId === option.attributeId} onChange={handleChange} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />
            </StyledTableCell>
            {/* <StyledTableCell width={150} sx={{ color: 'gray' }}>${option.price}</StyledTableCell>
            <StyledTableCell width={150} align="right">
                {selectedOptionId === option.id && <span>+${option.price}</span>}
            </StyledTableCell> */}
        </TableRow>);
    }
    console.log(optionGroup);
    return (
        <Table>
            <TableBody>
                <TableRow>                    
                    <TableCell colSpan={3}>
                        <Typography variant="h5" fontWeight='bold'>
                            {optionGroup.name.toUpperCase() === "DEFAULT" ? "Options" : optionGroup.name}
                            {/* {optionGroup.productAttributes.some(option => option.required === true) && <span style={{marginLeft:'10px', fontSize:'13px',color:'#E21818'}}>(required)</span>} */}
                        </Typography>
                    </TableCell>                    
                    <TableCell width={280} align="right">
                        <Button onClick={() => {handleResetRadio(optionGroup.name);}} style={{color:'gray', lineHeight:0, borderColor: 'gray' }} variant="outlined">
                            <div>Reset Option Selection&nbsp;</div>
                            <div><RestartAlt /> </div>
                        </Button>                        
                    </TableCell>
                    <TableCell width={100} align="right">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={props.onToggle}
                        >
                            {props.showRadioTables ? <KeyboardArrowUp fontSize="large" /> : <KeyboardArrowDown fontSize="large" />}
                        </IconButton></TableCell>
                </TableRow>                
                <TableRow>
                    <TableCell colSpan={5} sx={{ border: 'none' }}>
                        <Collapse in={props.showRadioTables} timeout="auto" unmountOnExit>
                            <StyledTable size='small' aria-label="spanning table">
                                <TableBody>
                                    {optionGroup.productAttributes.map((eachOption, index) => renderOption(index, optionGroup.name, eachOption))}
                                </TableBody>
                            </StyledTable>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

// export const CheckboxOptionsTable = (props: OptionGrpProps) => {
//     const optionGroup = props.groupItem;

//     const extractSelectedOptionId = (selectedOptions: ProductAttributes[]) => {
//         if (selectedOptions && selectedOptions.length > 0)
//             return selectedOptions.map(op => op.attributeId);

//         return [];
//     }

//     const selectedOptionIds: number[] = extractSelectedOptionId(props.selectedOptions);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const parsedSelectedOptionId = parseInt(event.target.value);
//         const isChecked = event.target.checked;

//         const selectedOption = optionGroup.productAttributes.find(opt => opt.attributeId === parsedSelectedOptionId);
//         let cloneOfSelectedOptions = props.selectedOptions ? [...props.selectedOptions] : [];

//         if (isChecked)
//             cloneOfSelectedOptions.push(selectedOption!);
//         else {
//             const indexOfChecked = cloneOfSelectedOptions.indexOf(selectedOption!);
//             cloneOfSelectedOptions.splice(indexOfChecked, 1);
//         }

//         props.selectedOptionsChanged(cloneOfSelectedOptions);
//     }

//     const renderOption = (index: number, name: string, option: Option): React.JSX.Element => {
//         const checked = selectedOptionIds.indexOf(option.id) !== -1;
//         return (<TableRow key={`OptionGroup-${index}`}>
//             <StyledTableCell width={150}>
//                 <div style={{display:'flex',flexDirection:'column'}}>
//                     {option.name}
//                     {!option.required && <span style={{fontSize:'11px',color:'#E21818'}}>(optional)</span> }
//                 </div>
//             </StyledTableCell>
//             <StyledTableCell width={150}>
//                 <StyledCheckbox value={option.id} name={name} checked={checked} onChange={handleChange} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />
//             </StyledTableCell>
//             <StyledTableCell width={150} sx={{ color: 'gray' }}>${option.price}</StyledTableCell>
//             <StyledTableCell width={150} align="right">
//                 {checked && <span>+${option.price}</span>}
//             </StyledTableCell>
//         </TableRow>);
//     }

//     return (
//         <Table>
//             <TableBody>
//                 <TableRow>
//                     <TableCell colSpan={4}>
//                         <Typography variant="h5" fontWeight='bold'>
//                             {optionGroup.name.toUpperCase() === "DEFAULT" ? "Options" : optionGroup.name}
//                             {/* {optionGroup.options.some(option => option.required === true) && <span style={{marginLeft:'10px', fontSize:'13px',color:'#E21818'}}>(required)</span>} */}
//                         </Typography>
//                     </TableCell>

//                     <TableCell align="right">
//                         <IconButton
//                             aria-label="expand row"
//                             size="small"
//                            // onClick={() => {
//                            //     setOpenCol(!openCol);
//                             //    props.handleOpenClose(props.itemIndex)
//                             //}}
//                             onClick={props.onToggle}
//                         >
//                             {props.showCheckTables ? <KeyboardArrowUp  fontSize="large" /> : <KeyboardArrowDown  fontSize="large" />}
//                         </IconButton></TableCell>
//                 </TableRow>
//                 <TableRow>
//                     <TableCell colSpan={5}>
//                         <Collapse in={props.showCheckTables} timeout="auto" unmountOnExit>
//                             <StyledTable size='small' aria-label="spanning table">
//                                 <TableBody>
//                                     {optionGroup.options.map((eachOption, index) => renderOption(index, optionGroup.name, eachOption))}
//                                 </TableBody>
//                             </StyledTable>
//                         </Collapse>
//                     </TableCell>
//                 </TableRow>
//             </TableBody>
//         </Table>
//     );
// }
