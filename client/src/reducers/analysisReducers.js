export default function(state = null, action) {
  switch (action.type) {
    case 'CODE_ANALYSIS':
      return {
        response: action.payload
      };
    default:
      return state;
  }
}
