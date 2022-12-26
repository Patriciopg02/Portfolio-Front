import {
  LandingDiv,
  TextLanding,
  DeveloperDIV,
  Flecha
} from './Landing.elements.js';

export default function Landing({theme}) {
    return (
       <LandingDiv>
        <a name='landingSection'></a>
        <img src={theme.background_1}/>
        <TextLanding>
          <h1>¡Welcome!</h1>
          <h2>Patricio Pereyra Gargiulo</h2>
          <DeveloperDIV>
            <span id='developer'>Full Stack Developer</span>
          </DeveloperDIV>
        </TextLanding>
        <Flecha></Flecha>
       </LandingDiv>
    )
}