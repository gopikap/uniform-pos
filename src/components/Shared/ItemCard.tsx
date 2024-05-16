import { CardMedia, Tooltip } from "@mui/material"
import { StyledItemCard, StyledItemContent, StyledProductName, StyledTypography } from "./Styles/CardStyle"
import { Product } from "../Dashboard";
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});
interface CardProps {
    item: Product,
    isOdd: string,
    onClick: (item: Product) => void;
    searchedPrdId: number
}

function ItemCard(props: CardProps) {
    return (
        <StyledItemCard isodd={props.isOdd} onClick={() => props.onClick(props.item)} {...(props.searchedPrdId === props.item.id && { style: { border: '5px solid blue' } })}>
            {props.item.imageUrl &&
                <CardMedia
                    sx={{ height: 80 }}
                    image={props.item.imageUrl}
                    title="image"
                />
            }
            <StyledItemContent>
                <Tooltip title={props.item.name} placement="top">
                    <div style={{
                        height: '100px',
                        overflow: 'hidden',
                        marginTop:'2px'
                    }}>                        
                        <div style={{textAlign:'center'}}>
                            <StyledTypography variant="h6" sx={{ lineHeight: 1.020 }}>{fm.from(props.item.price)}</StyledTypography>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <StyledProductName variant="h6" sx={{ lineHeight: 1.020 }}>{props.item.name}</StyledProductName>                            
                        </div>
                    </div>
                </Tooltip>
            </StyledItemContent>
        </StyledItemCard>
    )
}
export default ItemCard