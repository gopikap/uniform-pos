import { CardMedia } from "@mui/material"
import { StyledCategoryItemCard, StyledCategoryItemContent, StyledItemCard, StyledItemContent, StyledTypography } from "./Styles/CardStyle"

interface CardProps {    
    item: any,
    isOdd: string,
    onClick: (item:Object) => void;
}

function CategoryItemCard(props:CardProps) {   
    return(
        <StyledCategoryItemCard isodd={props.isOdd} onClick={() => props.onClick(props.item)}>
            { props.item.imageUrl && 
                <CardMedia 
                    sx={{ height: 80 }}
                    image={props.item.imageUrl}
                    title="image"    
                />
            }            
            <StyledCategoryItemContent>
                <StyledTypography variant="h5">{props.item.name}</StyledTypography>
            </StyledCategoryItemContent>            
        </StyledCategoryItemCard>
    )
}
export default CategoryItemCard