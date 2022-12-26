import github from '../../pngs/github.png'
import linkedin from '../../pngs/linkedin.png'
import { BoxTitle, CarouselExampleCaptions, CarouselItem, ContainerKnowMore, Icons, ModalBody, Project, ProjectsContainer, ProjectsDiv, ProjectsText, Title } from './Projects.elements';
import { useState, useEffect, useCallback } from 'react';
import GetProjects from './GetProjects.jsx';
import './Projects.css';

export default function Projects() {

    const [projects, setProjects] = useState([]);

    const fetchProjects = useCallback(async function () {
        const json = await GetProjects();
        console.log(json);
        setProjects(json.data);
    }, [])

    useEffect(() => {
        fetchProjects();
    }, [])
    
    return (
        <div>
            <a name='projectsSection'></a>
            <ProjectsDiv>
                <div data-aos="zoom-in-right"
                            data-aos-delay="150"
                            data-aos-duration="2000" className='ProjCont1'>
                    <Title>
                        <BoxTitle>
                            <h1>How do i do it?</h1>
                        </BoxTitle>
                    </Title>
                    <ProjectsText data-aos="zoom-in-right"
                    data-aos-delay="250"
                    data-aos-duration="2000">
                        <p>
                            ◈ Here you can see personal projects or in which I contributed →
                        </p>
                    </ProjectsText>
                    <br/>
                    <ContainerKnowMore data-aos="fade-right"
                            data-aos-delay="650"
                            data-aos-duration="2000">
                        <p id='knowmore'>
                            You want to know more about me?
                        </p>
                        <p id='knowmore2'>↓</p>
                    </ContainerKnowMore>
                </div>
                <ProjectsContainer>
                {
                    projects.map((project,ind) => (
                        <Project>
                            <a href={project.url} target='_blank'>
                                <h5>{project.title}</h5>
                            </a>
                            <img src={project.image} />
                            <p>{project.description}</p>
                            <Icons>

                                <button type="button" id='openModalbtn' class="btn" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${ind}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                    </svg>
                                </button>

                                <a href={project.github} target='_blank'>
                                    <img src={github} className='itemsCarousel' id='githubpng' alt='github'/>
                                </a>

                                <div class="modal fade" id={`staticBackdrop${ind}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role='document'>
                                    <div class="modal-content" style={{backgroundColor: 'rgb(25, 25, 25)'}}>
                                        <div class="modal-header">
                                            <h1>Used Technologies</h1>
                                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <ModalBody class="modal-body">
                                                <h4>➤ Database:</h4><br/>
                                            <p>
                                                {project.database}
                                            </p>
                                            <h4>➤ Back-end: </h4><br/>
                                            <p>
                                                {project.backend}
                                            </p>
                                                <h4>➤ Front-end:</h4><br/>
                                            <p>
                                                {project.frontend}
                                            </p>
                                        </ModalBody>
                                    </div>
                                </div>
                                </div>

                            </Icons>
                        </Project>
                    ))
                }
                </ProjectsContainer>
            </ProjectsDiv>
        </div>
    )
}