const INITIAL_STATE = {
  bloodGroup: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BLOODGROUP':
      return {
        ...state,
        bloodGroup: action.payload.group,
      };

    default:
      return state;
  }
};
