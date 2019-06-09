import { combineReducers } from 'redux';
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import analysisReducers from './analysisReducers';
import submissionReducer from './submissionReducer';
export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  analysis: analysisReducers,
  submissions: submissionReducer
});
