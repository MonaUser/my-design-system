import styled from "styled-components";
import { defaultTheme, typeScale } from "../Utils";
import {applyStyleModifiers}from "styled-components-modifiers";

const BUTTON_MODIFIERS={
small:()=>`
font-size:${typeScale.helperText};
padding:8px;

`

,

large:()=>`

font-size:${typeScale.h5};
padding: 16px 24px;
`
,
warning: ()=>`
background-color: ${defaultTheme.status.warningColor};
color:${defaultTheme.TextColorInverted};
&:hover{
    background-color:${defaultTheme.status.warningColorHover};
}


`
,
secondaryWarning: ()=>`
background: none;
color:${defaultTheme.status.warningColor};
border:2px solid ${defaultTheme.status.warningColor};


`,

error:()=>`

background-color:${defaultTheme.status.errorColor};
color:${defaultTheme.TextColorInverted};

&:hover ,&:focus{
    background-color:${defaultTheme.status.errorColorHover}
}
&:active{
    background-color:${defaultTheme.status.errorColorActive}
}
`,

secondaryError:()=>`
background:none;
color:${defaultTheme.status.errorColor};
border:2px solid ${defaultTheme.status.errorColor};
`,

success:()=>`
background-color:${defaultTheme.status.successColor};
color:${defaultTheme.status.successColor};
&:hover ,&:focus{
    background-color:${defaultTheme.status.successColorHover};
    outline: 3px  solid ${defaultTheme.status.successColor};
    outline-offset:2px;

}
&:active{
    background-color:${defaultTheme.status.successColorActive}
}

`,
tertiarySuccess:()=>`

background:none;

`
}


const Button = styled.button`
padding: 12px 24px;
font-size: ${typeScale.paragraph};
border-radius: 4px;
min-width:100px;
cursor: pointer;
font-family: "Vidaloka" , monospace;
transition: background-color 0.2s linear, color 0.2s linear;


&:hover{
background-color:${defaultTheme.PrimaryColorHover};
color: ${defaultTheme.TextColorOnPrimary};

}

&:focus{
   outline 3px solid  ${defaultTheme.PrimaryColorFocus};
   outline-offset: 2px;
    color: ${defaultTheme.TextColorOnPrimary};
    
    }

&:active{
        background-color:${defaultTheme.PrimaryColorActive};
        color: ${defaultTheme.TextColorOnPrimary};
        border-color: ${defaultTheme.PrimaryColorActive};
        }
`;

const PrimaryButton = styled(Button)` 

background-color :${defaultTheme.PrimaryColor};
border: none;
color: white;

&:disabled{
    background-color:${defaultTheme.disabled};
        color: ${defaultTheme.TextColorInverted};
        cursor: not-allowed;

}

${applyStyleModifiers(BUTTON_MODIFIERS)};

`;


export const SecondaryButton = styled(Button)`
background-color:white;
border: 2px  solid ${props=>defaultTheme.PrimaryColor} ;
color:${props=>defaultTheme.PrimaryColor};

&:disabled{
    background:none;
        color: ${props=>defaultTheme.disabled};
        border-color:${props=>defaultTheme.disabled};
        cursor: not-allowed;

}
${applyStyleModifiers(BUTTON_MODIFIERS)};



`;

export const TertiaryButton = styled(Button)`
background-color:none;
border: none;
color:${defaultTheme.PrimaryColor};

&:disabled{
    background:none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;

}

${applyStyleModifiers(BUTTON_MODIFIERS)};


`;


export default PrimaryButton;