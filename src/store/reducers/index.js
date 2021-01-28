import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import becomeDonorReducer from './becomeDonorReducer';

export default combineReducers({
  homeReducer,
  becomeDonorReducer,
});
