import github from '../../pngs/github.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className='div1'>
                <h3>© Patricio - Portfolio</h3>
                <p>2022</p>
            </div>
            <div className='div2'>
                <p id='techs'>Technologies used:</p>
                <p>JS - CSS - React - Bootstrap - AOS(Animate on Scroll) - EmailJS</p>
                <div className='git'>
                    <p style={{borderBottom:'1px solid white'}}>You can view the code right here: </p>
                    <a href='https://github.com/Patriciopg02/Portfolio' target='_blank'>
                        <img src={github} className='itemsCarousel' id='githubpng' alt='github'/>
                    </a>
                </div>
            </div>
        </div>
    )
}