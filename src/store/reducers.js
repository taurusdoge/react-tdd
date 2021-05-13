import {combineReducers} from "redux";
// import {STORE_RESTAURANTS} from "./restaurants/actions";
import restaurants from "./restaurants/reducers";

// const records = (state = [], action) => {
//   switch (action.type) {
//     case STORE_RESTAURANTS:
//       return action.records;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   records,
// });
export default combineReducers({restaurants});
