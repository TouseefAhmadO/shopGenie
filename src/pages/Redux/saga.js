import { takeLatest, put, call } from "redux-saga/effects";
import { getProductsFail, getProductsSuccess } from "./actions";
import { get } from "../../store/APIHelper";
import { GET_PRODUCTS } from "./actionTypes";

function* onGetProducts() {
    try {
        const API = () => get("/products")
        const response = yield call(API);
        yield put(getProductsSuccess(response));
    } catch (error) {
        yield put(getProductsFail(error.response));
    }
}

function* ProductSaga() {
    yield takeLatest(GET_PRODUCTS, onGetProducts);
}

export default ProductSaga;
