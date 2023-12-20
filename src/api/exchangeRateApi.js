import {config} from "../config/config.js";

function exchangeRateApi () {
    return {
        async getExchangeRate(currency){
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${config.apiKey}/latest/${currency}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json()
        },

        async getSupportedCurrencies(){
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${config.apiKey}/codes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response.json()
        }
    }
}

export const ExchangeRateApi = exchangeRateApi()