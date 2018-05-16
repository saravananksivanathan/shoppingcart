import { createStore } from "redux";
import rootReducer from "../reducers";
import { getState } from "../helpers/localStorage";

const store = createStore(rootReducer, getState());

export default store;
