export default function(state = [], action) {
  switch (action.type) {
    case 'USER_SUBMISSIONS':
      return {
        response: action.payload.submissions
      };
    default:
      return state;
  }
}
