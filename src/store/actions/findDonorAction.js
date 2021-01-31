const searchCitypAction = (city) => {
  return (dispatch) => {
    dispatch({type: 'CITY', payload: {city}});
  };
};

const resetfindDonorAction = () => {
  return (dispatch) => {
    dispatch({type: 'RESET'});
  };
};

export {searchCitypAction, resetfindDonorAction};
