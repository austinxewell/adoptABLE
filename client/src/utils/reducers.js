import { UPDATE_CART } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_CART:
            return {
                ...state,
                products: [...action.products]
            }
        
        default:
            return state;
    }
}

export function useProductReducer(InitialState) {
    return useReducer(reducer, InitialState);
}