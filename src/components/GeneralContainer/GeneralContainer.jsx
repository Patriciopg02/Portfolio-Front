import Footer from '../Footer/Footer';
import MoreofMe from '../MoreofMe/MoreofMe';
import Projects from '../Projects/Projects';
import Whatido from '../What i do/whatido';
import './GeneralContainer.css';

export default function GeneralContainer() {
    return (
        <div className='GeneralContainer'>
            <Whatido/>
            <Projects/>
            <MoreofMe/>
            <Footer/>
        </div>
    )
}