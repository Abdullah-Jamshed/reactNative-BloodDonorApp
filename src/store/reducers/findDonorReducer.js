const INITIAL_STATE = {
  city: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CITY':
      return {
        ...state,
        city: action.payload.city,
      };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
};
