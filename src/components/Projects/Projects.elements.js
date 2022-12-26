import styled, {keyframes} from 'styled-components';

export const selectDown = keyframes `
    50% {
        transform: translateY(-15%);
    }
`


export const ProjectsDiv = styled.div `
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.background_3};
    font-family: 'Josefin Sans';

    @media (max-width:600px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 90vh;
        max-height: 90vh;
    }
`
export const Title = styled.div `
    width: 35vw;
    background-color: ${({theme}) => theme.box_3};
    transform: skew(20deg);
    margin-top: 1vw;
    border: .2vw solid ${({theme}) => theme.border_box3};
    transition: all .5s;

    &:hover {
        width: 40vw;
    }

    @media (max-width:600px) {
        width: 60vw;
        height:12vh;
        margin-left: -30vw;
        margin-top: 10vw;
        &:hover {
            width: 60vw;
        }
    }
`

export const BoxTitle = styled.div `
    width: 30vw;
    background-color: ${({theme}) => theme.box_3};
    transform: skew(-20deg);
    border-bottom: .2vw solid ${({theme}) => theme.border_box3};
    margin-bottom: -.2vw;
    margin-left: 0vw;

    h1 {
        font-size: 6vw;
        text-align: center;
        margin-left: 2vw;
        padding-top: .5vw;
        color: ${({theme}) => theme.h1_3};
        text-shadow: .4vw .2vw 0px ${({theme}) => theme.shadow_3};
    }

    @media (max-width:600px) {
        width: 50vw;
        height:12vh;
        h1 {
            font-size: 10vw;
            width: 50vw;
        }
    }
`

export const ProjectsText = styled.div `
    color: ${({theme}) => theme.color};
    width: 44vw;
    font-size: 1.8vw;
    margin-top: 4vw;
    margin-left: 2vw;

    @media (max-width:600px) {
        p {
            margin-top: 10vw;
            width: 100vw;
            font-size: 4vw;
            margin-left: -25vw;
        }
    }
`
export const ContainerKnowMore = styled.div `
    display: flex;

    #knowmore {
        color:${({theme}) => theme.keep_3};
        font-size: 1.8vw;
        margin-left: 2vw;
        margin-top: 5vw;
    }
    #knowmore2 {
        color:${({theme}) => theme.keep_3};
        font-size: 1.8vw;
        margin-left: 2vw;
        margin-top: 5vw;
        animation: ${selectDown} 1s infinite reverse;
    }

    @media (max-width:600px) {
        display: none;
    }
    
`
export const ProjectsContainer = styled.div `
    height:80vh;
    max-height:80vh:
    width:40vw;
    max-width:40vw;
    margin-right:5vw;
    overflow-y:scroll;
    overflow-x:hidden;
    padding-right:4vw;

    @media (max-width:600px) {
        height:60vh;
        max-height:60vh;
        width:90vw;
        max-width:90vw;
        margin-right:0vw;
    }
`

export const Project = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:35vw;
    width:35vw;
    border: .1vw solid ${({theme}) => theme.border_box3};
    background-color: ${({theme}) => theme.box_3};
    margin-bottom:5vh;
    color: ${({theme}) => theme.color};
    padding:1vw;
    border-radius:.5vw;

    img {
        width:32vw;
        height:18vw;
        border-radius:.5vw;
        margin:.5vw;
    }
    a {
        text-decoration:none;
    }
    h5 {
        font-size: 3vw;
        transition: all .2s;
        color:rgb(221, 0, 0) ;
        text-shadow: .2vw .2vw .1vw rgb(255, 255, 255);
        border-bottom: .1vw solid rgb(221, 0, 0);
        cursor:pointer;
    }
    p {
        font-size:1.3vw;
        width:32vw;
    }
    h5:hover {
        transform: scale(103%);
    }
    svg {
        transition: all .2s;
        width:2vw;
        height:2vw;
        border: .1vw solid #000;
        border-radius: 2.5vw;
        color:#fff;
        background-color:black;

    }
    svg:hover {
        transform: scale(110%);
    }
    #githubpng {
        border-radius: 5vw;
        transition: all .2s;
        background-color: aliceblue;
    }
    #githubpng:hover {
        transform: scale(110%);
    }

    @media (max-width:600px) {
        max-width:88vw;
        width:88vw;
        img {
            width:85vw;
            height:45vw;
            margin:.5vw;
        }
        p {
            font-size:3.2vw;
            width:81vw;
        }     
        h5 {
            font-size: 5vw;
        }  
    }
`

export const Icons = styled.div `
    img {
        width: 2.1vw;
        height: 2.1vw;
    }
    #openModalbtn {
        padding: 0px;
        border-radius: 1.6vw;
        margin-right: 1vw;
        width: 2vw;
    }
    svg {
        width: 2.1vw;
        height: 2.1vw;
    }

    @media (max-width:600px) {
        img {
            width: 6vw;
            height: 6vw;
        }
        #openModalbtn {
            padding: 0px;
            border-radius: 1.6vw;
            margin-right: 1vw;
            width: 6vw;
        }
        svg {
            width: 5.8vw;
            height: 5.8vw;
        }
    }
`

export const ModalBody = styled.div `
    width: 35vw;
    min-width: 35vw;
    height: 40vh;
    min-height: 40vh;
    max-height: 40vh;
    margin:2vw;
    margin-bottom:2vw;
    p{
        font-size:1.3vw;
        color: white;
    }
    h4 {
        color: rgb(190, 42, 42);
        font-size: 1.5vw;
        margin-bottom: 0px;
        margin:0;
    }

    @media (max-width:600px) {
        width: 70vw;
        min-width: 70vw;
        p{
            font-size:3.7vw;
            width: 70vw;
        }
        h4 {
            color: rgb(190, 42, 42);
            font-size: 4vw;
            margin-bottom:-1vw;
            margin-top:2vw;
        }
    }
`