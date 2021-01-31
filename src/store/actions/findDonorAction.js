const searchCitypAction = (city) => {
  return (dispatch) => {
    dispatch({type: 'CITY', payload: {city}});
  };
};

export {searchCitypAction};
