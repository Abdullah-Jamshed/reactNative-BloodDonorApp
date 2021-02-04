import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import becomeDonorReducer from './becomeDonorReducer';
import findDonorReducer from './findDonorReducer';

export default combineReducers({
  homeReducer,
  becomeDonorReducer,
  findDonorReducer,
});
