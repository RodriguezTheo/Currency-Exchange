import {ExchangeRateApi} from "../api/exchangeRateApi.js";

function exchangeRateServices (){
    const api = ExchangeRateApi
    return {
        async getExchangeRate(currency){
            return api.getExchangeRate(currency)
        },

        async getSupportedCurrencies(){
            return api.getSupportedCurrencies()
        }
    }
}

export const ExchangeRateServices = exchangeRateServices()