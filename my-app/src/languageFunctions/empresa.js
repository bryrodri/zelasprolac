import {empresa as text} from '../text/empresa'

export const empresa=(idioma)=>{
    switch (idioma) {
        case "en":
          return text.EN
       
        default:
            return text.ES
      }
}