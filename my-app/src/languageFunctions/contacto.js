import {contacto as text} from '../text/contacto'

export const contacto=(idioma)=>{
    switch (idioma) {
        case "en":
          return text.EN
       
        default:
            return text.ES
      }
}