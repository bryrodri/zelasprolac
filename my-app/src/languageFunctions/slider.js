import {slider as text} from '../text/slider'

export const slider=(idioma)=>{
    switch (idioma) {
        case "en":
          return text.EN
       
        default:
            return text.ES
      }
}