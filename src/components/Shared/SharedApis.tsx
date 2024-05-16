import Axios from "axios";
import { AppSettings } from "../../AppSettings";
import { PlaceOrder } from "../CartContainer";

export const fetchStudentSpendLimit = async(studentID: number) => {
    try {
        const response = await Axios.get(`${AppSettings.ApiBaseUrl}/Students/${studentID}/balance`);    
        if (response && response.data) {
            return response.data;          
        }        
    } catch (error) {
        return JSON.stringify(error);    
    }
    
} 

export const placeOrder = async(request: PlaceOrder) => {  
    try {
        const response = await Axios.post(`${AppSettings.ApiBaseUrl}/orders`, request);        
        return response.data;    
    } catch (error) {
        return JSON.stringify(error);    
    }
    
}

export const studentsSearch = async (searchString: string) => {
    const request = {
        searchCriteria: searchString
    }
    try {
        const response = await Axios.post(`${AppSettings.ApiBaseUrl}/Students/search`, request)
        return response.data;    
    } catch (error) {
        return JSON.stringify(error);    
    }    
}