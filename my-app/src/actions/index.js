/*App mode*/
export const actionChangeLenguageMode =(idioma) => {
    return (dispatch) => {
      dispatch({
        type: "SET_IDIOMA",
        payload: idioma
      });
    };
  };