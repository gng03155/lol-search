import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./reducer/searchReducer";

export const store = createStore(searchReducer, applyMiddleware(thunk));

export type ReducerType = ReturnType<typeof searchReducer>;
