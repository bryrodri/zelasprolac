const reducer = (state, action) => {
    
    switch (action.type) {
      case "SET_IDIOMA":
        console.log(state.idioma==="es" ? "en" : "es")
        window.localStorage.setItem("idioma", JSON.stringify(action.payload));
        
        return {
          ...state,
            idioma: action.payload
        };

     
      default:
        return state;
    }
  };
  export default reducer;
  