import { useEffect, useState } from "react";
import {Option, Product, ProductAttributeCategories, ProductAttributes} from "../Dashboard";
import CustomizedDialogs from "./DialogContainer";
import { RadioOptionsTable} from "./OptionGroupTable";
import { Typography } from "@mui/material";
import { Row } from "./CartTable";
import { getTotal } from "./Utils";
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});


interface OptionDialogProps {
    openOpt: boolean;
    handleClose: () => void;
    selectedRow?: Row
    products: Array<Product>
    handleAddToCart: (value:Array<ProductAttributes>) => void;
    openEdit: boolean

}

const OptionDialogContainer = (props: OptionDialogProps) => {
    const [selectedOptions, setSelectedOptions] = useState<ProductAttributes[]>([]);
    const [openedGrp, setOpenedGrp] = useState(0);
    console.log(props.selectedRow);
    //@ts-ignore
    const product = props.products.filter(x => x.productId === props.selectedRow.productId);
    console.log(product);
    const optionGroups = product[0].productAttributeCategories;
    const [toggleStates, setToggleStates] = useState(Array(optionGroups.length).fill(false));
    const [errMsg, setErrMsg] = useState('');
    
    useEffect(() => {
        if (props.selectedRow !== null && props.openEdit) {
            const options = props.selectedRow?.productAttributeCategories;            
            if (options && options?.length > 0)
                setSelectedOptions([...options]);
        }

    },[props.selectedRow])

    useEffect(() => {
        getTotalPrice();
    }, [selectedOptions])

    const handleToggle = (index: any) => {
        setToggleStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = !newStates[index];
          return newStates;
        });
      };

    const handleSelectedOptionsChanged = (options: ProductAttributes[]) => {        
        setSelectedOptions([...options]);
    }

    const getTotalPrice = () => {        
        let total = 0; let optionsPrice = 0;
        const productPrice = props.selectedRow?.hasOwnProperty("unit") ?  props.selectedRow?.unit : props.selectedRow?.price;                
        total =  getTotal(productPrice!, selectedOptions);        
        return fm.from(total);
    }

    const renderNoOptionsAvailable = () => {
        return (<p>No Options Available!!!</p>);
    }

    const handleOpenedGrpChange = (grpIndex:number) => {
        console.log("Current selected grp", grpIndex)
        setOpenedGrp(grpIndex);
    }

    const renderProductOptions = () => {
        //@ts-ignore
        const product = props.products.filter(x => x.productId === props.selectedRow.productId);
        const optionGroups = product[0].productAttributeCategories;

        if(optionGroups.length === 0)
            return renderNoOptionsAvailable();

        const optionGroupRenderers = new Array<React.JSX.Element>();
       // let index = 0;
        //@ts-ignore
        for(const [index, eachOptionGroup] of optionGroups.entries()) {  
            const optionTypeRenderer = <RadioOptionsTable itemLength={optionGroups.length} groupItem={eachOptionGroup} key={index} itemIndex={index}
            openClose={index === openedGrp}  selectedProduct={product} selectedOptions={selectedOptions}
             selectedOptionsChanged={handleSelectedOptionsChanged} handleOpenClose={handleOpenedGrpChange}                     
             showRadioTables={optionGroups.length > 1 ? toggleStates[index]: true} onToggle={() => handleToggle(index)}  />;
            // const optionType = eachOptionGroup.options[0].controlName.toLowerCase() === "radio" ? "radio" : "checkbox";
            // const optionTypeRenderer = optionType === "radio" ?
            //     (<RadioOptionsTable itemLength={optionGroups.length} groupItem={eachOptionGroup} key={index} itemIndex={index}
            //          openClose={index === openedGrp}  selectedProduct={product} selectedOptions={selectedOptions}
            //           selectedOptionsChanged={handleSelectedOptionsChanged} handleOpenClose={handleOpenedGrpChange}                     
            //           showRadioTables={optionGroups.length > 1 ? toggleStates[index]: true} onToggle={() => handleToggle(index)}  />) :
            //     (<CheckboxOptionsTable itemLength={optionGroups.length} groupItem={eachOptionGroup} key={index} itemIndex={index} 
            //          openClose={index === openedGrp} selectedProduct={product} selectedOptions={selectedOptions} 
            //          selectedOptionsChanged={handleSelectedOptionsChanged}  handleOpenClose={handleOpenedGrpChange}
            //           showCheckTables={optionGroups.length > 1 ? toggleStates[index]: true} onToggle={() => handleToggle(index)}/>);
            optionGroupRenderers.push(optionTypeRenderer);
            //index++;
        }  
        return (optionGroupRenderers);
    }

    const checkAnySelected = (selectedOptionIds: number[], optionGrp: any): boolean => {
        //@ts-ignore
        return optionGrp.productAttributes.some(opt => selectedOptionIds.indexOf(opt.attributeId) !== -1);
    }

    const handleAddToCart = () => {        
        console.log(selectedOptions);
        console.log(optionGroups);

        const selectedOptionIds = selectedOptions.map(op => op.attributeId);
        let isAtLeastOneRequiredSelected: boolean = true;
        let groupNameWithMissingSelected: string = "";

        for (let optGrpIdx = 0; optGrpIdx < optionGroups.length; optGrpIdx++) {
            const optionGrp = optionGroups[optGrpIdx];
            const isAnySelected = checkAnySelected(selectedOptionIds, optionGrp);
            if(!isAnySelected)
            {
                isAtLeastOneRequiredSelected = false;
                //@ts-ignore
                groupNameWithMissingSelected = optionGrp.groupName;
                break;
            }
        }
       
        if (!isAtLeastOneRequiredSelected) {
            let grpName = groupNameWithMissingSelected.toUpperCase() === "DEFAULT" ? "Options" : groupNameWithMissingSelected;
            setErrMsg(`Required option missing selection for ${grpName}`);            
            return false;
        } else {
            setErrMsg('')
        }
        props.handleAddToCart(selectedOptions);
    }

    const renderTitle = () => {
        return(
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>{props.selectedRow ? (props.selectedRow.name ): ''}</Typography>
                    <span style={{marginLeft:'20px', color:'gray', fontSize:'20px'}}>${ props.selectedRow?.hasOwnProperty("imageUrl") ? props.selectedRow?.price : props.selectedRow?.unit}</span>
                </div>
                <div>
                    Total {getTotalPrice()}
                </div>
            </div>
        )
    }

    return(
        <CustomizedDialogs
                onClose={() => props.handleClose()}
                typeOfDialog="product"
                //@ts-ignore
                title={renderTitle()}
                content={renderProductOptions()}
                btnTitle="Add to cart"
                closebtn="Cancel"
                errMsg={errMsg}
                onSelect={handleAddToCart}
            />
    )
}
export default OptionDialogContainer;
