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
    background-color: #ffffff;
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

        h1 {
            font-size:38px;
            margin-left: 0px;
            text-shadow: 3px 1.5px 0px white;
        }
    }
`

export const PCdiv = styled.div `
    @media (max-width:600px) {
        display: none;
    }
`

export const Cont1 = styled.div `
    min-width: 80vh;
`

export const BoxTitle = styled.div `
    width: 200px;
    border-bottom: 2px solid #e9a0a0;
    background-color: #e9afaf;
    transform: skew(-20deg);
    margin-left: -4px;
    margin-bottom: -2px;

    h1 {
        font-size: 80px;
        text-align: center;
        margin-left: 30px;
        padding-top: 5px;
        width: 240px;
        color: rgb(143, 61, 61);
        text-shadow: 4px 2px 0px white;
    }

    @media (max-width:600px) {
        width: 50vw;
    }

    @media (min-width:1400px) {
        width: 300px;
        h1 {
            font-size: 110px;
        }
    }
`

export const Title = styled.div `
    width: 350px;
    background-color: #e9afaf;
    border: 2px solid #e9a0a0;
    transform: skew(20deg);
    margin-bottom: 40px;
    transition: all .5s; 

    &:hover {
        width: 400px;
    }

    @media (max-width:600px) {
        width: 80vw;
        margin-left: 20%;
        margin-top: 50px;

        &:hover {
            width: 80vw;
        }
    }

    @media (min-width:1400px) {
        width: 450px;
        &:hover {
            width: 500px;
        }
    }
`

export const TextWhatido = styled.div `
    color: #000000;
    width: 440px;
    font-size: 20px;
    margin-left: 30px;

    @media (min-width:1400px) {
        width: 500px;
        font-size: 25px;
    }
`

export const Cont1Mobile = styled.div `
    display: none;

    @media (max-width:600px) {
        min-width: 80vh;
        display: block;
    }
`

export const TextWhatidoMobile = styled.div `
    display: none;

    @media (max-width:600px) {
        display: block;
        color:white;
        width: 80%;
        font-size: 14px;
        margin: 0px;
    }
`

export const TechsContainer = styled.div `
    display: flex;
    margin-left: 300px;
    background-color: #e9afaf;
    align-items: center;
    height: 100vh;
    border-left: 2px solid #e9a0a0;
    border-right: 2px solid #e9a0a0;

    p {
        background-color: rgb(26, 26, 26);
        display: none;
        position: absolute;
        width: fit-content;
        border-radius: 5px;
        color: white;
        padding: 2px;
        z-index: 2;
    }

    img {
        width: 65px;
        transition: all .3s;
        height: 70px;
        margin: 15px;
    }

    img:hover {
        transform: scale(115%);
    }

    img:hover ~ p {
        display: block;
    }

    #figma {
        width: 55px;
    }

    @media (max-width:600px) {
        margin: 0px;
        flex-direction: column;
        border: 2px solid rgb(33, 0, 0);
        border-radius: 15px;
        height: 15%;
        width:85vw;
        max-width: 85vw;

        img {
            width: 25px;
            height: 28px;
            margin:10px;
        }

        #figma {
            width: 25px;
        }

        p {
            background-color: rgb(26, 26, 26);
            display: none;
            position: absolute;
            width: fit-content;
            border-radius: 5px;
            font-size: 11px;
            color: white;
            padding: 2px;
            z-index: 2;
        }
    }

    @media (min-width:1400px) {
        margin-left: 300px;

        img {
            width: 85px;
            height: 90px;
        }
    }

`

export const TechAndTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Techs1 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width:600px) {
        flex-direction: row;
        justify-content: space-between;
        height: 50%;
        width: 100%;
    }
`
export const Techs2 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width:600px) {
        flex-direction: row;
        justify-content: space-between;
        height: 50%;
        width: 100%;
    }
`

export const KeepDown = styled.div `
    text-align: center;
    margin-right: 150px;
    width: 100px;
    
    h3 {
        color: #00000062;
        font-size: 60px;
    }

    h2 {
        color: #00000062;
        font-size: 60px;
        padding-left: 40px;
        animation: selectDown 1s infinite reverse;
    }

    @media (max-width:600px) {
        width: 80vw;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 0px;

        h3 {
            color: greenyellow;
            font-size: 20px;
        }

        h2 {
            color: greenyellow;
            font-size:30px;
            margin-right: 40px;
        }

    }

    @media (min-width:1400px) {
        margin-right: 200px;
        
        h3 {
            font-size:80px;
        }
    
        h2 {
            font-size: 90px;
            padding-left: 70px;
        }
    }
`