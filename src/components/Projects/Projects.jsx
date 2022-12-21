import './Projects.css';
import github from '../../pngs/github.png'
import linkedin from '../../pngs/linkedin.png'
import concatus from '../../pngs/concatus.png'
import recipesapp from '../../pngs/recipesapp.png'

export default function Projects() {
    return (
        <div className='projects'>
            <div data-aos="zoom-in-right"
                        data-aos-delay="150"
                        data-aos-duration="2000" className='ProjCont1'>
                <div className='title'>
                    <div id='boxTitle'>
                        <h1>How do i do it?</h1>
                    </div>
                </div>
                <div className='projectsText' data-aos="zoom-in-right"
                        data-aos-delay="250"
                        data-aos-duration="2000">
                    <p>
                        ◈ Here you can see personal projects or in which I contributed →
                    </p>
                </div>
                <br/>
                <div className='containerKnowMore' data-aos="fade-right"
                        data-aos-delay="650"
                        data-aos-duration="2000">
                    <p id='knowmore'>
                        You want to know more about me?
                    </p>
                    <p id='knowmore2'>↓</p>
                </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={recipesapp} className="imgProject" alt="recipes-app"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Recipes App</h5>
                        <p>
                            It is a SPA, which consumes data from an external API of recipes, and renders them in cards, you can filter, order and access the detail of each one, in addition to creating a new one.
                            Backend and Frontend made by me.
                            This project is made for the SoyHenry bootcamp!
                        </p>
                        <div className='icons'>

                            <button type="button" id='openModalbtn' class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>

                            <a href='https://www.linkedin.com/feed/update/urn:li:activity:6981281760982503424/' target='_blank'>
                                <img src={linkedin} className='itemsCarousel' alt='linkedin'/>
                            </a>
                            <a href='https://github.com/Patriciopg02/Recipes-APP' target='_blank'>
                                <img src={github} className='itemsCarousel' id='githubpng' alt='github'/>
                            </a>

                            <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role='document'>
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Used Technologies</h1>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                        <h4>➤ Database:</h4><br/>
                                    <p>
                                        • PostgreSQL <br/>
                                    </p>
                                       <h4>➤ Back-end: </h4><br/>
                                    <p>
                                        • Sequelize<br/>
                                        • Express<br/>
                                        • JS<br/>
                                        • Axios<br/>
                                    </p>
                                        <h4>➤ Front-end:</h4><br/>
                                    <p>
                                        • JavaScript <br/>
                                        • React <br/>
                                        • Redux <br/>
                                        • CSS pure<br/>
                                        • Axios <br/>
                                    </p>
                                </div>

                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className='imgProject' src={concatus} alt="concatus"/>
                    <div className="carousel-caption d-md-block">
                        <a href='https://concatus.vercel.app/' target='_blank'>
                            <h5>Concat US</h5>
                        </a>
                            <p>
                                Project in which I contributed, it is a social network, in which the main objective is the creation of events, in addition to being able to post publications, comments, etc.
                                It also has a global chat, a section with your profile information, and a donation section and payment gateway to become a premium user.
                                <br/>
                                I worked on 90% of the web decoration, i made the responsive and most Frontend components.
                            </p>
                            <div className='icons'>

                            <button type="button" id='openModalbtn' class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>

                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role='document'>
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Used Technologies</h1>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h4>➤ Database:</h4><br/>
                                    <p>
                                        • MongoDB <br/>
                                    </p>
                                       <h4>➤ Back-end: </h4><br/>
                                    <p>
                                        • Mongoose <br/>
                                        • Express <br/>
                                        • TypeScript <br/>
                                        • Firebase <br/>
                                        • Axios <br/>
                                        • Cloudinary <br/>
                                        • Socket.io <br/>
                                        • Paypal API <br/>
                                        • Node Mailer <br/>
                                    </p>
                                        <h4>➤ Front-end:</h4><br/>
                                    <p>
                                        • JavaScript <br/>
                                        • React <br/>
                                        • Redux <br/>
                                        • CSS <br/>
                                        • Material UI <br/>
                                        • Axios <br/>
                                    </p>
                                
                                </div>

                                </div>
                            </div>
                            </div>

                            
                            <a href='#' target='_blank'>
                                <img src={linkedin} className='itemsCarousel' id='linkedinpng' alt='linkedin' target='_blank'/>
                            </a>
                            <a href='https://github.com/Patriciopg02/SocialNetworkingApp' target='_blank'>
                                <img src={github} className='itemsCarousel' id='githubpng' alt='github'/>
                            </a>
                            </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}