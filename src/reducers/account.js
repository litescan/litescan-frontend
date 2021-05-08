import {SET_RECENT_TRANSACTIONS, SET_TOKEN_BALANCES, SET_TOTAL_TRANSACTIONS} from "../actions/account";
import {LOGIN} from "../actions/app";
import {find} from "lodash";

const initialState = {
  tokens: [],
  xltBalance: 0,
  totalTransactions: 0,
  recentTransactions: [],
  frozen: {
    total: 0,
    balances: [],
  },
};

export function accountReducer(state = initialState, action) {

  switch (action.type) {

    case LOGIN: {
      return {
        ...state,
        tokens: [],
      };
    }

    case SET_TOKEN_BALANCES: {
      let {balance: xltBalance = 0} = find(action.tokens, tb => tb.name.toUpperCase() === "XLT") || {};

      return {
        ...state,
        xltBalance,
        tokens: action.tokens,
        frozen: {
          ...action.frozen,
        }
      }
    }

    case SET_TOTAL_TRANSACTIONS: {
      return {
        ...state,
        totalTransactions: action.totalTransactions,
      }
    }

    case SET_RECENT_TRANSACTIONS: {
      return {
        ...state,
        recentTransactions: action.transactions,
      }
    }

    default:
      return state;
  }
}
