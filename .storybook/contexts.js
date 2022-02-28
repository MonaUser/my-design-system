import { ThemeProvider } from "styled-components";
import { defaultTheme,darkTheme } from "../src/Utils";
 

export const Contexts =[
    {
      icon: "box",
      title: "Themes",
      component: [ThemeProvider],
      params: [

           {
               name: "Default theme", props:{ theme: defaultTheme, default: true}
            
           } ,
           {
               name:"Dark theme", props:{theme: darkTheme}
           }
      ],
      options:{
          deep: true,
          disable: false,
          cancelable: false
      }

    }

];