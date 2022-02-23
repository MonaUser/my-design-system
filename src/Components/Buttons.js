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
background-color: ${props => props.theme.status.warningColor};
color:${props => props.theme.TextColorInverted};
&:hover{
    background-color:${props => props.theme.status.warningColorHover};
}
&:focus{
    background-color:${props => props.theme.status.warningColorHover};

    outline: 3px solid ${props => props.theme.status.warningColorHover};
    outline-offset: 2px;
}

`
,
secondaryWarning: ()=>`
background: none;
color:${props => props.theme.status.warningColor};
border:2px solid ${props => props.theme.status.warningColor};


`,

error:({props})=>`

background-color:${props => props.theme.status.errorColor};
color:${props => props.theme.TextColorInverted};

&:hover ,&:focus{
    background-color:${props => props.theme.status.errorColorHover}
}
&:active{
    background-color:${props => props.theme.status.errorColorActive}
}
`,

secondaryError:()=>`
background:none;
color:${props => props.theme.status.errorColor};
border:2px solid ${props => props.theme.status.errorColor};
`,

success:()=>`
background-color:${props => props.theme.status.successColor};
color:${props => props.theme.status.successColor};
&:hover ,&:focus{
    background-color:${props => props.theme.status.successColorHover};
    outline: 3px  solid ${props => props.theme.status.successColor};
    outline-offset:2px;

}
&:active{
    background-color:${props => props.theme.status.successColorActive}
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
background-color:${props => props.theme.PrimaryColorHover};
color: ${props => props.theme.TextColorOnPrimary};

}

&:focus{
   outline 3px solid  ${props => props.theme.PrimaryColorFocus};
   outline-offset: 2px;
    color: ${props => props.theme.TextColorInverted};
    background-color:${props => props.theme.PrimaryColorHover};

    
    }

&:active{
        background-color:${props => props.theme.PrimaryColorActive};
        color: ${props => props.theme.TextColorOnPrimary};
        border-color: ${props => props.theme.PrimaryColorActive};
        }
`;

export const PrimaryButton = styled(Button)` 

background-color :${props => props.theme.PrimaryColor};
border: none;
color: ${props => props.theme.TextColorOnPrimary};

&:disabled{
    background-color:${props => props.theme.disabled};
        color: ${props => props.theme.TextColorInverted};
        cursor: not-allowed;

}

${applyStyleModifiers(BUTTON_MODIFIERS)};

`;


export const SecondaryButton = styled(Button)`
background-color:white;
border: 2px  solid ${props => props.theme.PrimaryColor} ;
color:${props => props.theme.PrimaryColor};

&:disabled{
    background:none;
        color: ${props => props.theme.disabled};
        border-color:${props => props.theme.disabled};
        cursor: not-allowed;

}
${applyStyleModifiers(BUTTON_MODIFIERS)};



`;

export const TertiaryButton = styled(Button)`
background-color:none;
border: none;
color:${props => props.theme.PrimaryColor};

&:disabled{
    background:none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;

}

${applyStyleModifiers(BUTTON_MODIFIERS)};


`;


