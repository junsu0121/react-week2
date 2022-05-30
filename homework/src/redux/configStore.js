import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// 두 훅 써야해서 임포트!                   미들웨어 위한 훅 2개 임포트
import thunk from "redux-thunk";
//미들웨어 임포트
import homework from "./modules/homework";
// modules에서 작성한 리듀서 다 가져와야해서 임포트!

const middlewares = [thunk];
const rootReducer = combineReducers({ homework });
const enhancer = applyMiddleware(...middlewares);
//리듀서들 다 써준다. 리듀서 다 합치기!

const store = createStore(rootReducer, enhancer);
//rootReducer를 store에 넣어줌

export default store;
// index.js에서 store연결시켜줘야해서 export!
