import axios from 'axios';
import { GET_ERRORS } from './types';

export const userSubmissions = id => dispatch => {
  axios
    .get('//' + window.location.hostname + ':5000/api/submissions/' + id)
    .then(res => {
      dispatch({
        type: 'USER_SUBMISSIONS',
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
