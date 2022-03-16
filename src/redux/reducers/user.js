// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
