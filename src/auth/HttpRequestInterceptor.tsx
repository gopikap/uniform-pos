//@ts-nocheck
import axios from 'axios';

let _accessToken = null;
export function setAccessToken(accessToken) {
    _accessToken = accessToken;
}

function setupInterceptor() {
    axios.interceptors.request.use(async (config) => {
        
        if (!_accessToken) {
            return config;
        }

        config.headers = {
            'Authorization': `Bearer ${_accessToken}`
        };

        return config;
    });
}
export default setupInterceptor;