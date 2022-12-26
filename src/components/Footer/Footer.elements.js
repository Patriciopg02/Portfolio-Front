import styled, {keyframes} from 'styled-components';

export const FooterDiv = styled.div `
    color: ${({theme}) => theme.color5};
    background-color: ${({theme}) => theme.background_5};
    border-top: .1vw solid ${({theme}) => theme.border_footer};
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 100vw;
    max-height: 30vh;
    height: 30vh;
    font-family: 'Josefin Sans';
    font-size:1.2vw;

    @media (max-width:600px) {
        align-items: center;
        flex-direction: column;
        text-align: center;
        max-height: 50vh;
        height: 50vh;
    
        p{
            font-size: 4vw;
        }
    }
`

export const Div1 = styled.div `
h3 {
    font-size:1.5vw
}
    @media (max-width:600px) {
        margin-top:5vw;
        max-width: 80vw;
        h3 {
            font-size:6vw
        }
    }
`
export const Div2 = styled.div `
    #techs {
        color: ${({theme}) => theme.techs};
    }
    
    @media (max-width:600px) {
        max-width: 80vw;
        margin-bottom:10vw;
    }
`


export const Git = styled.div `
    display: flex;
    align-items: center;

    img {
        width: 3vw;
        height: 3vw;
        border: .1vw solid transparent;
        transition: all .3s;
        margin-bottom: 1.5vw;
        border-radius: 2.5vw;
        background-color: aliceblue;
    }
    img:hover {
        transform: scale(110%);
    }
    p{
        margin-right: 1.5vw;
    }

    @media (max-width:600px) {
        text-align: center;
        flex-direction: column;
        img {
            width: 8vw;
            height: 8vw;
        }
        p {
            font-size: 4vw;
            margin-right: 0px;
        }
    }
`