import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./Typography";
import { normalize } from "polished";
export const GlobalStyle = createGlobalStyle`

${normalize()}

html{

    font-size=16px;
    box-sizing: border_box;
}

* *:before,*:after {
 box-sizing: inherit;
}

body{ 

    margin:0;
    font-family:${PrimaryFont} ;

}

main{

width:90%;
margin:0 auto;
}

`;