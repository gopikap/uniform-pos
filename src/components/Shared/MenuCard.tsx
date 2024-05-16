import { Typography } from "@mui/material"
import { MenuItemCard, MenuItemContent } from "./Styles/CardStyle"

interface CardProps {    
    item: any,
    onClick: (catId: number) => void;
    isSelected: boolean
}

function MenuCard(props:CardProps) {  
    let itemName = props.item.name;
    if (itemName.includes("/")) {
        itemName = itemName.split("/").join(' /');
    }
    return(
        <MenuItemCard onClick={() => props.onClick(props.item.id)} 
                {...(props.isSelected &&  {style:{backgroundColor: 'transparent', border:'1px solid #1A77D6' }}  )} >
            <MenuItemContent>
                <Typography 
                    variant="button"
                    {...( props.isSelected ?  {style:{ color: "#1A77D6", whiteSpace:'pre-wrap'}} :  {style:{ color: "white",whiteSpace:'pre-wrap'}})}
                 >{itemName}</Typography>
            </MenuItemContent>            
        </MenuItemCard>
    )
}
export default MenuCard