 import styled, {keyframes} from 'styled-components';

export const moveRight = keyframes `
100% {
  transform: translateX(-175%);
}
`

export const moveDown = keyframes `
100% {
  transform: translateY(-40vw);
}
`
export const moveUP = keyframes `
100% {
  transform: translateY(280%);
}
`

export const appear = keyframes `
100% { visibility: visible;}
`

export const typing = keyframes `
from { width: 0}
`

export const blink = keyframes `
50% { border-color: transparent}
`

// export const selectDown = keyframes `
//   50% {
//       transform: translateY(-15%);
//   }
// `

export const LandingDiv = styled.div `
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  top: 0px;
  left: 0px;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  text-align: center;
  color: ${({theme}) => theme.color};
  font-family: 'Josefin Sans';

  img{
    position:absolute;
    top:0px;
    left:0px;
    z-index:-1;
    width:100vw;
    max-width:100vw;
    min-height:100vh;
    max-height:100vh;
  }

  @media (max-width:600px) {
    min-height: 100vh;
    max-height: 100vh;
  }
`

export const TextLanding = styled.div `
  margin-top: 5vw;

  h1 {
    font-size: 8vw;
    animation: ${moveDown} 2s reverse;
    color: ${({theme}) => theme.colorText};
    text-shadow: .4vw .2vw 0px #ffffff;
    

    @media (max-width:600px) {
      font-size: 16vw;
    }
  }

  h2 {
    font-size: 7vw;
    text-shadow: .4vw .2vw 0px rgb(107, 0, 0);
    animation: ${moveRight} 3s reverse;
    color: ${({ theme }) => theme.color};

    @media (max-width:600px) {
      font-size: 14vw;
      margin-top: 5vw;
    }
  }

`

export const DeveloperDIV = styled.div `
  visibility: hidden;
  animation: ${appear} 1s infinite;
  animation-delay: 3.2s;

  #developer {
    display: block;
    font-family: monospace;
    font-size:2.5vw;
    white-space: nowrap;
    border-right: .4vw solid;
    margin-top:1vh;
    margin-left: 60vw;
    width: 20ch;
    animation: ${typing} 5s steps(20), ${blink} .5s infinite step-end alternate;
    animation-delay: 3s;
    overflow:hidden;

    @media (max-width:600px) {
      margin: 0px;
      padding: 0px;
      margin-top: 15vw;
      margin-left: 15vw;
      font-size: 6.5vw;
    }
  }
`

  

export const Flecha = styled.div `
  width:0px;
  border-style: solid;
  border-width: 2.5vw;
  border-bottom-width:0px;
  border-color: red transparent transparent transparent;
  margin-bottom: 5vh;
  animation: ${moveUP} 5s reverse;

  @media (max-width:600px) {
    border-width: 4vw;
    margin-bottom: 5vw;
  }
  `