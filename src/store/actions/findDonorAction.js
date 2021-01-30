const bloodGroupAction = (group) => {
  return (dispatch) => {
    dispatch({type: 'BLOODGROUP', payload: {group}});
  };
};

export {bloodGroupAction};
