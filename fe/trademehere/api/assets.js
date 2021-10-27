import axios from 'axios';

let headers = {
    "APCA-API-KEY-ID" : process.env.VUE_APP_ALPACA_API_KEY,
    "APCA-API-SECRET-KEY" : process.env.VUE_APP_ALPACA_API_SECRET
}
export default {
    
    index(params) {

        return axios.get( process.env.VUE_APP_ALPACA_ENDPOINT + process.env.VUE_APP_ALCAPA_ASSETS, {
            params: params,
            headers : headers
        } )
    }
}