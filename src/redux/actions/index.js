// Coloque aqui suas actions
import getExchangeRates from "../../services/getCurrencies";

export const SEND_EMAIL = "SEND_EMAIL";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REQUEST_CURRENCIES = "REQUEST_CURRENCIES";
export const GET_CURRENCIES_SUCCESS = "GET_CURRENCIES_SUCCESS";
export const GET_CURRENCIES_ERROR = "GET_CURRENCIES_ERROR";

export const sendEMail = (email) => ({
  type: SEND_EMAIL,
  payload: email,
});

export const receiveExpense = (expense) => ({
  type: RECEIVE_EXPENSE,
  payload: expense,
});

// aula redux do zero:
// fala que faz a requisição
const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

// Requisição success
const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: currencies,
});

// Requisição error
const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  payload: error,
});

// Thunk
export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const currencies = await getExchangeRates();
    dispatch(getCurrenciesSuccess(currencies));
  } catch (error) {
    getCurrenciesError(error.message);
  }
};

/* const fetchCurrencies = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();
  return Object.keys(requestJson).filter((currency) => currency !== 'USDT');
};

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const getCurrencies = () => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(setCurrencies(currencies));
};
 */
