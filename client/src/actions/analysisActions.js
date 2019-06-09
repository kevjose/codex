import axios from 'axios';
import { GET_ERRORS } from './types';

export const codeAnalyse = task => dispatch => {
  axios
    .post(':5000/api/compilers/run', task)
    .then(res => {
      dispatch({
        type: 'CODE_ANALYSIS',
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
