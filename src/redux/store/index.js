import { configureStore, combineReducers} from "@reduxjs/toolkit"




import jobsReducer from "../reducers/jobsReducer";
import favouritesReducer from "../reducers/favouritesReducers";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,

});

const store = configureStore({
    reducer: rootReducer
});
export default store;