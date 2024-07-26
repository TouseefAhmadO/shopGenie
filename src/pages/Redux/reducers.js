import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_SUCCESS
} from "./actionTypes";

const initialState = {
    products: [],
    loading: false,
    error: false,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state = { ...state, loading: true };
            break;
        case GET_PRODUCTS_SUCCESS:
            state = { ...state, products: action.data, loading: false };
            break;
        case GET_PRODUCTS_FAIL:
            state = {
                ...state,
                error: action.error,
                loading: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default ProductReducer;
