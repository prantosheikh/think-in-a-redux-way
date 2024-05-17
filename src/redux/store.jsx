import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middleware/myLogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
