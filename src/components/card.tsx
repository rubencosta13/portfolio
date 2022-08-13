import './card.styles.css';
import "animate.css/animate.min.css";
import { SiDocker, SiGithub, SiJavascript, SiKubernetes, SiLinkedin, SiMongodb, SiTypescript, SiVim } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';

const CardContainer = () => { 
  return (
    <section className='col-6 d-flex justify-content-center mt-3 align-self-center' data-aos="fade-right">
      <div className="card">
        <img src="https://avatars.githubusercontent.com/u/66113929?v=4" alt="Ruben Costa's profile" className="card-img-top img-thumbnail"/>
        <h1 className='text-center'>Ruben Costa</h1>
        <h3 className='text-center'>Backend Developer</h3>
        <div className='skills card-body'>
          <span className='skillsSpan'>Skills:</span>
          <span>TypeScipt: <SiTypescript color='007acc'/></span>
          <span>JavaScript: <SiJavascript color='f7df1e'/></span>
          <span>NodeJS: <DiNodejsSmall color='215732'/></span>
          <span>Vim: <SiVim color='019833'/></span>
          <span>MongoDB: <SiMongodb color='4DB33D'/></span>
          <span>Docker: <SiDocker color='0db7ed'/> & Kubernetes: <SiKubernetes color='326ce5'/></span>
          <div className='d-flex flex-column mt-1'>
            <span className='skillsSpan'>Links:</span>
            <a href='https://github.com/rubencosta13' className='btn btn-primary center'>
              <span><SiGithub /> Github Profile</span>
            </a>
            <a href='https://www.linkedin.com/in/r%C3%BAben-costa-3733b21a4/' className='btn btn-primary center mt-1'>
              <span><SiLinkedin /> LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
      <div className='d-flex align-items-start mt-3 bg-light text-dark mb-3'>
        <p>Backend developer with 2 years of self taught experience</p>
      </div>
    </section>
    
  );
};


export default CardContainer;