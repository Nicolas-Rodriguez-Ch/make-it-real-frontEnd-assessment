import img from './assets/DSC06745.JPG';
import './AboutPage.css';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr'

const AboutPage = () => {
  return(
    <div className='aboutPage__container'>
      <span className='aboutPage__header'>
        <h1>Nicolás Rodríguez</h1>
        <span className='aboutPage__description'>I'm a Web Developer in training, helping create software solutions for companies and coding enthusiast!</span>
        <picture className='aboutPage__picture'>
          <img src={img} alt="Nicolás Rodíguez"></img>
        </picture>
      </span>
      <section className='aboutPage__footer'>
        <h4 className='aboutPage__list-title'>In this program I've learned so far:</h4>
        <ul className='aboutPage__list'>
          <li>The ins and outs of React.</li>
          <li>Redux Toolkit</li>
          <li>How to work with local and remote repositories</li>
        </ul>
        <section className='aboutPage__links'>
          <section className='aboutPage__links-section'>
            <GrMail/>
            <a href="mailto:nicolasrodriguezch@hotmail.com" target="_blank" rel="noreferrer">Click here for my email.</a>
          </section>
          <section className='aboutPage__links-section'>
            <BsGithub />
            <a href="https://github.com/Nicolas-Rodriguez-Ch" target="_blank" rel="noreferrer">Click here for my GitHub.</a>
          </section>
        </section>
      </section>
    </div>
  )
}
export default AboutPage;