import { createStore } from "redux";
import userReducer from "./reducers/userReducer";

const initialStore = {
  user: null,
};

export const store = createStore(
  userReducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
