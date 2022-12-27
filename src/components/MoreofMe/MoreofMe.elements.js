import styled, {keyframes} from 'styled-components';

export const MoreofMeDiv = styled.div `
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  background-color: ${({theme}) => theme.background_4};
  font-family: 'Josefin Sans';
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  #AlertSent {
    position: absolute;
    left: 85%;
    margin-top: 5vw;
    font-size:1.4vw;
    width: 25vw; 
    text-align:center;
    background-color: rgb(205, 241, 227);
    padding: 1vw;
    border-radius: .2vw;
}

  @media (max-width:600px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    align-items: center;
    max-height: 200vh;
    text-align: center;

    #AlertSent {
      font-size:4vw;
      padding: 2vw;
      border-radius: 1vw;
      width: 30vw; 
      left: auto;
      z-index: 4;
      margin-top: 20vw;
      margin-left: 4vw;
    }
  }
`


export const Cont1 = styled.div `
  min-width: 80vh;

  @media (max-width:600px) {
    max-width: 100vw;
    display: flex;
    margin-right: 2vw;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.div `
  width: 30vw;
  background-color: rgb(255, 186, 186);
  transform: skew(20deg);
  margin-bottom: 4vw;
  margin-top: 5vw;
  border: .2vw solid white;
  transition: all .5s;

  &:hover {
    width: 35vw;
  }

  @media (max-width:600px) {
    max-width: 60vw;
    margin-left: -40vw;
    width: 60vw;
  
    &:hover {
      width: 60vw;
    }
  }
`
export const BoxTitle = styled.div `
  width: 20vw;
  background-color: rgb(255, 186, 186);
  transform: skew(-20deg);
  border-bottom: .2vw solid white;
  margin-bottom: -.2vw;
  margin-left: -1vw;

  h1 {
    font-size: 5vw;
    text-align: center;
    margin-top: 10%;
    margin-left: 3vw;
    width: 24vw;
    color: rgb(187, 94, 94);
    text-shadow: .4vw .2vw 0px rgb(73, 50, 50);
  }

  @media (max-width:600px) {
    width: 50vw;
    h1 {
      width:40vw;
      font-size: 10vw;
    }
  }
  }
`

export const TextyBTN = styled.div `
  #textMoreOfMe {
    color: ${({theme}) => theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 44vw;
    font-size: 1.5vw;
    margin-left: 3vw;
  }

  #downCV {
    margin-left: 3vw;
    margin-top:5vw;
    color: #A54E4E;
    background-color: rgb(255, 186, 186);
    border: .1vw solid transparent;
    font-weight: bold;
    padding:.5vw;
    font-size:1.2vw;
    transition: all .3s;
  }

  #downCV:hover {
    transform: scale(110%);
    background-color: rgb(231, 168, 168);
  }
  @media (max-width:600px) {
    width:78vw;
    margin-top:10vw;
    margin-right:5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #downCV {
      font-size:3vw;
      margin-left: 4vw;
    }

    #textMoreOfMe {
      width: 78vw;
      font-size: 4vw;
    }
  }
  }
`


export const Cont2 = styled.div `
  margin-right: 10%;
  text-align: center;

  #fotoperfil {
    width: 28vw;
    height: 38vw;
    border-radius: 1%;
    margin-bottom:1.5vw;
  }
  
  #contact {
    color: ${({theme}) => theme.keep_4};
    border-bottom: .1vw solid ${({theme}) => theme.keep_4};
    margin-top: 1vw;
    margin-bottom: 1vw;
    font-size:1.4vw;
  }
  
  @media (max-width:600px) {
    text-align: center;
    margin-top: 8%;
    margin-left: 8%;
    width: 80vw;
    max-width: 80vw;

    #fotoperfil {
      width: 50vw;
      height: 65vw;
      border-radius: 1%;
    }
    #contact {
      font-size:4vw;
    }
  }
`

export const Redes = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3.5vw;
    height: 3.5vw;
    border: .1vw solid transparent;
    border-radius: .7vw;
    transition: all .3s;
  }

  .imgContact:hover {
    transform: scale(110%);
  }

  #githubpng {
    border-radius: 2.5vw;
    background-color: aliceblue;
  }

  #exampleModalLabel {
    color: white;
  }

  .form-control {
    margin-bottom: 1vw;
    background-color: rgb(73, 73, 73);
    color: white;
  }

  #wpp_png {
    border-radius: 2.5vw;
  }

  #button{
    transition: all .3s;
  }

  #button:hover {
    transform: scale(105%);
    border: .1vw solid #ffbebe;
  }
  svg {
    width:5vw;
    height:5vh;
  }
  #openModalbtn {
    width: 4vw;
    height: 3.5vw;
    padding: 0vw;
    transition: all .3s;
    color: ${({theme}) => theme.color};
  }
  #openModalbtn:hover {
    transform: scale(110%);
  }

  @media (max-width:600px) {
    margin-bottom: 10vw;
    img {
      width: 9vw;
      height: 9vw;
      border: 1px solid transparent;
      border-radius: 7px;
      transition: all .3s;
    }
    .imgContact:hover {
      transform: scale(110%);
    }
    #githubpng {
      border-radius: 10vw;
      background-color: aliceblue;
    }
    #openModalbtn {
      width: 9vw;
      height: 16vw;
    }
    svg {
      width:8vw;
      height:8vh;
    }
    .modal {
      width: 80vw;
      max-width: 80vw;
      padding: 0px;
     }
  }
`


export const ModalBody = styled.div `
  padding:2vw;

  input {
    margin-bottom:5vw;
  }
  .form-control {
    margin-bottom:10vw;
  }

  label {
    color:grey;
    margin-bottom:3vw;
  }
`
