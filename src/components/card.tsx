import './card.styles.css'
import { SiJavascript, SiMongodb, SiTypescript, SiVim, SiGithub } from 'react-icons/si'
import { DiNodejsSmall } from 'react-icons/di'
import { Link } from 'react-router-dom';

const CardContainer = () => { 
  return (
    <div className="card" data-aos="fade-right">
      <img src="https://avatars.githubusercontent.com/u/66113929?v=4" alt="Ruben Costa's profile" className="card-img-top img-thumbnail"/>
      <h1>Ruben Costa</h1>
      <h3>Backend Developer</h3>
      <div className='skills card-body'>
        <span className='skillsSpan'>Skills:</span>
        <span>TypeScipt: <SiTypescript color='007acc'/></span>
        <span>JavaScript: <SiJavascript color='f7df1e'/></span>
        <span>NodeJS: <DiNodejsSmall color='215732'/></span>
        <span>Vim: <SiVim color='019833'/></span>
        <span>MongoDB: <SiMongodb color='007acc'/></span>
        <Link to='https://github.com/rubencosta13'>
            <SiGithub></SiGithub>
        </Link>
      </div>
    </div>
  );
};


export default CardContainer;