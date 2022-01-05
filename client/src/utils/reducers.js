import { UPDATE_CART, REMOVE_FROM_CART, CLEAR_CART } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_CART:
            return {
                ...state,
                cart: [...action.products]
            }
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product.id !== action._id;
            })
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        
        default:
            return state;
    }
}

export function useProductReducer(InitialState) {
    return useReducer(reducer, InitialState);
}