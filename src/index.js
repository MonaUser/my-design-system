import React,{useState} from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./Components";
import { GlobalStyle,defaultTheme,darkTheme } from "./Utils";


const App = () => {


    const[useDarkTheme, setDarkTheme]=useState(false);
    return (
        <ThemeProvider theme={useDarkTheme?darkTheme:defaultTheme}>

            <button
             style={{ margin:"0 16px 24px ",padding:"8px", background:"none", cursor: "pointer"}}
             onClick={()=>{setDarkTheme(true)}}
            > Dark Theme
            </button>

            <button
             style={{ margin:"0 16px 24px ",padding:"8px", background:"none", cursor: "pointer"}}
             onClick={()=>{setDarkTheme(false)}}
            > Default Theme
            </button>

            <div style={{backgroundColor:useDarkTheme?defaultTheme.PrimaryColor:darkTheme.PrimaryColor,
            width:"100vw", height:"100vh", display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <SignUpModal/>
            <GlobalStyle />

            </div>
        </ThemeProvider >

    );
}


ReactDom.render(<App />, document.querySelector("#root"));