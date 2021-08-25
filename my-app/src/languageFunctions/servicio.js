import {servicio as text} from '../text/servicio'

export const servicio=(idioma)=>{
    switch (idioma) {
        case "en":
          return text.EN
       
        default:
            return text.ES
      }
}