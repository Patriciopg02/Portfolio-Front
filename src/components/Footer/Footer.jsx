import github from '../../pngs/github.png';
import { Div1, Div2, FooterDiv, Git } from './Footer.elements';

export default function Footer() {
    return (
        <div>
            <a name='footerSection'></a>
            <FooterDiv>
                <Div1>
                    <h3>© Patricio - Portfolio</h3>
                    <p>2022</p>
                </Div1>
                <Div2>
                    <p id='techs'>Technologies used:</p>
                    <p>JS - CSS - Styled Components - React - Bootstrap - AOS(Animate on Scroll) - EmailJS </p>
                    <Git>
                        <p style={{borderBottom:'1px solid white'}}>You can view the code right here: </p>
                        <a href='https://github.com/Patriciopg02/Portfolio-Front' target='_blank'>
                            <img src={github} className='itemsCarousel' id='githubpng' alt='github'/>
                        </a>
                    </Git>
                </Div2>
            </FooterDiv>
        </div>
    )
}