import {navbar as text} from '../text/navbar'

export const navbar=(idioma)=>{
    switch (idioma) {
        case "en":
          return text.EN
       
        default:
            return text.ES
      }
}