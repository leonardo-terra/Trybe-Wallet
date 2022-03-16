const getExchangeRates = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();
  delete requestJson.USDT;
  return requestJson;
};
// Método DELETE aprendido com o companheiro Leonardo Vogel

export default getExchangeRates;
