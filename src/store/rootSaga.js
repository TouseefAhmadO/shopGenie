import { all, fork } from "redux-saga/effects";
import ProductSaga from "../pages/Redux/saga";


export default function* rootSaga() {
  yield all([fork(ProductSaga)]);
}