import styled from "styled-components";

export const StyledButton =styled.button`
    position: absolute;
    top: ${(props) => props.$y || 100}px;
    left: ${(props) => props.$x || 100}px;
    background-color: ${(props)=> props.variant == "Outlines"? "#002ead" : "#b30000"} ;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 15px;
    min-height: 30px;
    min-width: 120px;
    transition: 0.7s;
    &:hover{
        background-color: #b2b2d6;
        color: black;
        cursor: pointer;

        transform: scale(1.1) skew(45deg) rotate(360deg);
        transition: 0.7s;
    }

`

export const FancyButton = styled(StyledButton)`
background-color: linear-gradient(to right, #d5c6d3 0%,#ee4efd 100%);
top: 70%;
`