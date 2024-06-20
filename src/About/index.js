import './index.css'
import logo from '../logo.svg';

const About = ()=>{
    return(
        <div>
            <p className="about">I am learning ReactJS which is a JavaScript Front-end library</p>
            <img src = {logo} alt = 'logo'/>
        </div>
    )
}

export default About;
