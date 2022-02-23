import React from"react";
import styled from "styled-components";
import {useSpring,animated, config}from "react-spring"
import { typeScale } from "../Utils";
import { CloseIcon } from "../assets/icons/close-icon";
import { SignUp } from "../assets/illustration/sign-up";
import {PrimaryButton }from "./Buttons";


const ModalWrapper = styled.div`

width: 800px;
height:600px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background-color: ${props => props.theme.formElementBackground};
color:${props => props.theme.textOnFormElementBackground};
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
position:relative;
border-radius: 2px;


`;

const SignUpHeader = styled.h3`

font-size: ${typeScale.header3};

`;

const SignUpText = styled.p`

font-size : ${ typeScale.paragraph};
max-width:70%;
text-align:center;
`;

const CloseModalButton = styled.button`

cursor: pointer;
background: none;
border: none;
position: absolute;
right:40px;
top:40px;
width:24px;
height:24px;
padding:0;


`;

const SignUpImage= styled.div`

width:50%;
height: 50%;




`;

export const  SignUpModal= ({showModal,setShowModal})=>{
 
    const animation = useSpring({

        opacity:showModal? 1 : 0,
        transform: showModal? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    });
    return(

<animated.div style={animation}>
<ModalWrapper>
   <SignUpImage>  
        <SignUp/>
    </SignUpImage>
    <SignUpHeader>Sign Up</SignUpHeader>
    <SignUpText>Sign up to get access</SignUpText>
    <PrimaryButton >Sign up</PrimaryButton>
    <CloseModalButton aria-label="Close modal">
        <CloseIcon/>
    </CloseModalButton>
    
</ModalWrapper>

</animated.div>

    );
}
