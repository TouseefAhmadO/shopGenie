import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_SUCCESS
} from "./actionTypes";

export const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};

export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data,
    };
};

export const getProductsFail = (error) => {
    return {
        type: GET_PRODUCTS_FAIL,
        error,
    };
};