import png1 from '../../pngs/1.png'
import png2 from '../../pngs/2.png'
import png3 from '../../pngs/3.png'
import png4 from '../../pngs/4.png'
import png5 from '../../pngs/5.png'
import png6 from '../../pngs/6.png'
import png7 from '../../pngs/7.png'
import png8 from '../../pngs/8.png'
import png9 from '../../pngs/9.png'
import figma from '../../pngs/figma.png'
import png11 from '../../pngs/11.png'
import png12 from '../../pngs/12.png'
import { WhatidoDiv, Cont1, Title, BoxTitle, TextWhatido, Cont1Mobile, TextWhatidoMobile, TechsContainer, TechAndTitle, Techs1, Techs2, PCdiv, KeepDown } from './whatido.elements.js';
export default function Whatido() {
    return (
                <WhatidoDiv>
                        <PCdiv>
                            <Cont1 data-aos="zoom-in-right"
                            data-aos-delay="150"
                            data-aos-duration="2000">
                                    <Title>
                                        <BoxTitle>
                                            <h1>What i do?</h1>
                                        </BoxTitle>
                                    </Title> 
                            </Cont1>
                            <TextWhatido data-aos="zoom-in-right"
                            data-aos-delay="250"
                            data-aos-duration="2000">
                                <p>
                                ◈ I am a Full Stack web developer with an inclination towards Front End.<br/>
                                <br/>
                                ◈ I have the ability to create and design web pages, define their style and appearance with good judgment.<br/>
                                <br/>
                                ◈ Day by day I try to improve myself, learning new technologies to specialize in this area.<br/>
                                <br/>
                                ◈ The technologies that I dominate at the moment are →
                                </p>
                            </TextWhatido>
                        </PCdiv>

                        <Cont1Mobile data-aos="zoom-in-right"
                        data-aos-delay="150"
                        data-aos-duration="2000">
                            <Title>
                                <BoxTitle>
                                    <h1>What i do?</h1>
                                </BoxTitle>
                            </Title> 
                        </Cont1Mobile>
                            
                        <TextWhatidoMobile data-aos="zoom-in-right"
                        data-aos-delay="250"
                        data-aos-duration="2000">
                            <p>
                            ◈ I am a Full Stack web developer with an inclination towards Front End.<br/>
                            <br/>
                            ◈ I have the ability to create and design web pages, define their style and appearance with good judgment.<br/>
                            <br/>
                            ◈ Day by day I try to improve myself, learning new technologies to specialize in this area.<br/>
                            <br/>
                            ◈ The technologies that I dominate at the moment are →
                            </p>
                        </TextWhatidoMobile>

                        <TechsContainer data-aos="fade-up"
                        data-aos-delay="1000"
                        data-aos-duration="3000">
                            <Techs1>
                                <TechAndTitle>
                                    <img src={png1} alt='png'/>
                                    <p>HTML</p>
                                </TechAndTitle>
                                <TechAndTitle>
                                    <img src={png2} alt='png'/>
                                    <p>CSS</p>
                                </TechAndTitle>
                                <TechAndTitle>
                                    <img src={png3} alt='png'/>
                                    <p>Javascript</p>
                                </TechAndTitle>
                                <TechAndTitle>
                                    <img src={png4} alt='png'/>
                                    <p>Gitflow</p>
                                </TechAndTitle>
                                <TechAndTitle>
                                    <img src={png5} alt='png'/>
                                    <p>Node</p>
                                </TechAndTitle>
                                <TechAndTitle>
                                    <img src={png6} alt='png'/>
                                    <p>React</p>
                                </TechAndTitle>
                            </Techs1>
                            <Techs2>
                                <TechAndTitle>
                                    <img src={png7} alt='png'/>
                                    <p>Redux</p>
                                </TechAndTitle>    
                                <TechAndTitle>
                                    <img src={png8} alt='png'/>
                                    <p>Bootstrap</p>
                                </TechAndTitle>    
                                <TechAndTitle>
                                    <img src={png9} alt='png'/>
                                    <p>MaterialUI</p>
                                </TechAndTitle>    
                                <TechAndTitle>
                                    <img src={figma} id='figma' alt='png'/>
                                    <p>Figma</p>  
                                </TechAndTitle>    
                                <TechAndTitle>
                                    <img src={png11} alt='png'/>
                                    <p>Sequelize</p>
                                </TechAndTitle>    
                                <TechAndTitle>
                                    <img src={png12} alt='png'/>
                                    <p>Express</p> 
                                </TechAndTitle>    
                            </Techs2>
                        </TechsContainer>
                        <KeepDown data-aos="fade-down"
                                    data-aos-delay="1000"
                                    data-aos-duration="3000">
                            <h3>Keep going down</h3>
                            <h2>↓</h2>

                        </KeepDown>
                </WhatidoDiv>
          
    )
}