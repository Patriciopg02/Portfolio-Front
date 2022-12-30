import styled, {keyframes} from 'styled-components';

export const selectDown = keyframes `
    50% {
        transform: translateY(-15%);
    }
`


export const WhatidoDiv = styled.div `
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    background-color: ${({theme}) => theme.background_2};
    font-family: 'Josefin Sans';
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        width: 100vw;
        max-width: 100vw;
    }
`

export const Div1 = styled.div `
    display:flex; 
    flex-direction:column;
    margin-left:0vw;

    @media (max-width:600px) {
        margin-left:0vw;
    }
`


export const Cont1 = styled.div `
    max-width: 100vw;
`

export const BoxTitle = styled.div `
    width: 20vw;
    border-bottom: .2vw solid ${({theme}) => theme.border_box2};
    background-color: ${({theme}) => theme.box_2};
    transform: skew(-20deg);
    margin-left: -.4vw;
    margin-bottom: -.2vw;
    h1 {
        font-size: 7vw;
        text-align: center;
        margin-left: 2vw;
        padding-top: .5vw;
        width: 21vw;
        color: rgb(143, 61, 61);
        text-shadow: .4vw .2vw 0vw white;
    }
    @media (max-width:600px) {
        width: 30vw;
        h1 {
            font-size:11vw;
            width: 40vw;
            margin-left: 2vw;
            text-shadow: .3vw .2vw 0px white;
        }
    }
`

export const Title = styled.div `
    width: 30vw;
    border: .2vw solid ${({theme}) => theme.border_box2};
    background-color: ${({theme}) => theme.box_2};
    transform: skew(20deg);
    margin-bottom: 4vw;
    transition: all .5s; 
    &:hover {
        width: 37vw;
    }
    @media (max-width:600px) {
        width: 60vw;
        margin-left: 0vw;
        margin-top: 5vw;
        &:hover {
            width: 60vw;
        }
    }
`

export const TextWhatido = styled.div `
    color: ${({theme}) => theme.color};
    width: 42vw;
    font-size: 1.5vw;
    margin-left: 5vw;
    @media (max-width:600px) {
        width: 80%;
        font-size: 4vw;
        margin-top:5vw;
        margin-left: 9vw;
    }
`

export const TechsContainer = styled.div `
    display: flex;
    background-color: ${({theme}) => theme.box_2};
    flex-direction:column;
    margin-right:5vw;
    flex-wrap:wrap;
    align-items: center;
    height: 100vh;
    min-width:15vw;
    width:auto;
    border-left: .2vw solid ${({theme}) => theme.border_box2};
    border-right: .2vw solid ${({theme}) => theme.border_box2};

    p {
        background-color: rgb(26, 26, 26);
        display: none;
        position: absolute;
        width: fit-content;
        border-radius: .5vw;
        font-size:1vw;
        color: white;
        padding: .2vw;
        z-index: 2;
    }

    img {
        width: 4vw;
        transition: all .3s;
        height: 4.2vw;
        margin: 1.5vw;
    }

    img:hover {
        transform: scale(115%);
    }

    img:hover ~ p {
        display: block;
    }

    #figma {
        width: 5vw;
    }

    @media (max-width:600px) {
        margin: 0px;
        margin-bottom: 20vw;
        flex-direction: column;
        border: .1vw solid ${({theme}) => theme.border_box2};
        height: 30vw;
        width:100vw;
        max-width: 100vw;

        img {
            width: 9vw;
            height: 9.2vw;
            margin:2vw;
        }

        p {
            background-color: rgb(26, 26, 26);
            display: none;
            position: absolute;
            width: fit-content;
            border-radius: 5px;
            font-size: 3vw;
            color: white;
            padding: 2px;
            z-index: 2;
        }
    }

`

export const TechAndTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
