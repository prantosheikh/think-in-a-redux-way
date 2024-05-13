import { configureStore } from "redux";
import counterReducer from "./counter/counterReducer";

const store = configureStore(counterReducer);

export default store;
