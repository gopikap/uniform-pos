import dayjs from "dayjs";
import { CartProduct, CartState } from "../../store/reducers/cartSlice";
import { SelectedStudentState } from "../../store/reducers/selectedStudentSlice";
import { PlaceOrder, ProductOrder, OptionOrder } from "../CartContainer";
import { Option, ProductAttributes } from "../Dashboard";
import { DiscountAppliedState } from "../../store/reducers/discoutAppliedSlice";
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2,
    symbol: '$'
});

function priceRow(qty: number, unit: number) {   
    return qty * unit;
}

export function createRow(id: number, name: string, qty: number, unit: number, optionGroups: any) {
    let total = unit;
    if (optionGroups.length > 0) {
        total = getTotal(unit, optionGroups);
    }
    const price = priceRow(qty, total);
    var now = dayjs()
    const generatedId = id+"-"+now;

    return { id,generatedId, name, qty, unit, price, optionGroups };
}

export function createCustomRow(price: number, quantity: number) {
    var now = dayjs();
    const generatedId = "custItem-"+now;
    const unitPrice = price;
    return {generatedId, price, quantity, unitPrice};
}

export const getTotal = (productPrice: number, selectedOptions: Array<ProductAttributes>) => {
    let total = 0; let optionsPrice = 0;
    if (selectedOptions && selectedOptions.length > 0) {
        selectedOptions.forEach(ele => {
           // optionsPrice += ele.price;
        });
    }
    total = productPrice + optionsPrice;
    //return Math.round(total * 100) / 100;;
    return total;
}

export function isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
}

export const mapOrderedProducts = (productsInCart:Array<CartProduct>, selectedStudent:SelectedStudentState, typeOfPayment: string, cart:CartState ) => {
    const orderedProducts: ProductOrder[] = [];
    productsInCart.map((eachPr) => {
        const optionsSelected = eachPr.optionGroups.map(x => { 
            return {
                optionId: x.id
            };
        });
        
        var product: ProductOrder = {
            productId: eachPr.id,
            quantity: eachPr.qty,
            orderedProductOptions: optionsSelected,
           // customSales: cart.customSale
        };

        orderedProducts.push(product);
    })
    console.log("type of payment",typeOfPayment)
    const request: PlaceOrder = {
        ...(selectedStudent.studentId !== 0 && {studentId: selectedStudent.studentId}),
        orderType: "OverTheCounter",
        paymentMethod: typeOfPayment,
        orderedProducts: [...orderedProducts],
        ...((cart.discountType === "percentage" && cart.discountApplied > 0) && {discountPercentage: cart.discountApplied}),
        ...((cart.discountType === "amount" && cart.discountApplied > 0) && {dollarAmountDiscount: cart.discountApplied}),        
        customSales: cart.customSale
    }
    return request;
}