import { WhatidoDiv, Cont1, Title, BoxTitle, TextWhatido, TechsContainer, TechAndTitle, Div1 } from './whatido.elements.js';
import { useEffect, useState, useCallback } from 'react'
import GetTechs from './GetTechs.jsx';

export default function Whatido() {

    const [techs, setTechs] = useState([]);

    const fetchTechs = useCallback(async function () {
        const json = await GetTechs();
        setTechs(json.data);
    }, [])

    useEffect(() => {
        fetchTechs();
    }, [])

    return (
        <WhatidoDiv>
            <Div1>
                    <a name='whatidoSection'></a>
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
                            ◈ I am a Full Stack web developer with an inclination towards Front End.<br />
                            <br />
                            ◈ I have the ability to create and design web pages, define their style and appearance with good judgment.<br />
                            <br />
                            ◈ Day by day I try to improve myself, learning new technologies to specialize in this area.<br />
                            <br />
                            ◈ The technologies that I dominate at the moment are →
                        </p>
                    </TextWhatido>
            </Div1>

            <TechsContainer data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="3000">
                {
                    techs.map(tech => (
                        <TechAndTitle key={tech._id}>
                            <img src={tech.image} alt={tech.name} />
                            <p>{tech.name}</p>
                        </TechAndTitle>
                    ))
                }
            </TechsContainer>
        </WhatidoDiv>

    )
}
