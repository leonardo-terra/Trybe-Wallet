// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { /* SEND_EMAIL, */
  RECEIVE_EXPENSE,
  REQUEST_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  errorMessage: '',
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  /* case SEND_EMAIL:
    return {
      ...state,
      email: action.payload,
    }; */
  case RECEIVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: action.payload,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.payload,
    };
  default:
    return state;
  }
}
