import { dataCurrencySymbols } from "@/data/dataCurrencySymbols.js";

export const formateDataCurrencies = (data) => {
  if (!data) return [];

  const currencies = data.map((currency) => {
    const [code, name] = currency;
    const findCode = dataCurrencySymbols.find((item) => item.code === code);
    return { code, name, symbol: findCode ? findCode.symbol : code };
  });

  return currencies;
};
