const reducer = (state, action) => {
    
    switch (action.type) {
      case "SET_IDIOMA":
        console.log(state.idioma==="es" ? "en" : "es")
        window.localStorage.setItem("idioma", JSON.stringify(state.idioma==="es" ? "en" : "es"));
        
        return {
          ...state,
            idioma: state.idioma==="es" ? "en" : "es"
        };

     
      default:
        return state;
    }
  };
  export default reducer;
  