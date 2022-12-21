import styled, {keyframes} from 'styled-components';

export const moveRight = keyframes `
100% {
  transform: translateX(-175%);
}
`

export const moveDown = keyframes `
100% {
  transform: translateY(-400px);
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
  font-size: 35px;

  img{
    position:absolute;
    top:0px;
    left:0px;
    z-index:-1;
    width:100vw;
    max-height:100vh;
  }

  @media (max-width:600px) {
    min-height: 100vh;
    max-height: 100vh;
  }
`

export const TextLanding = styled.div `
  margin-top: 10%;

  h1 {
    font-size: 110px;
    /* top: 15%;
    left: 38%; */
    animation: ${moveDown} 2s reverse;
    text-shadow: 3px 2px 0px rgb(255, 255, 255);
    color: rgb(147, 0, 0);

    @media (max-width:600px) {
      font-size: 70px;
    }

    @media (min-width:1400px) {
      font-size: 140px;
    }
  }

  h2 {
    font-size: 90px;
    /* top: 35%;
    left: 15%; */
    text-shadow: 4px 2px 0px rgb(107, 0, 0);
    animation: ${moveRight} 3s reverse;
    color: ${({ theme }) => theme.color};

    @media (max-width:600px) {
      font-size: 60px;
      margin-top: 50px;
    }

    @media (min-width:1400px) {
      font-size: 120px;
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
    white-space: nowrap;
    border-right: 4px solid;
    margin-top: -1%;
    margin-left: 60%;
    width: 20ch;
    animation: ${typing} 5s steps(20), ${blink} .5s infinite step-end alternate;
    animation-delay: 3s;
    overflow:hidden;

    @media (max-width:600px) {
      margin: 0px;
      padding: 0px;
      font-size: 25px;
    }

    @media (min-width:1400px) {
      font-size: 40px;
    }
  }
`

  

export const Flecha = styled.div `
  width:0px;
  border-style: solid;
  border-width: 30px;
  border-bottom-width:0px;
  border-color: red transparent transparent transparent;
  margin-bottom: 5%;
  animation: ${moveUP} 5s reverse;

  @media (max-width:600px) {
    margin-bottom: 2%;
  }

  @media (min-width:1400px) {
    margin-bottom: 10%;
  }
  `