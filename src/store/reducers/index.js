import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import becomeDonorReducer from './becomeDonorReducer';
import findDonorReducer from './findDonorReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  homeReducer,
  becomeDonorReducer,
  findDonorReducer,
  requestReducer,
});
