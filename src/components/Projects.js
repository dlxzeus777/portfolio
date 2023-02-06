import cryptocloud from '../assets/crypto.png'
import wordwizard from '../assets/wordwizard2.png'
import pwgenerator from '../assets/pwgenerator.png'

import { AiFillGithub } from 'react-icons/ai'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'


const Projects = () => {


    return (
        <section id='projects'>
            <div className="wrapper">
                <h2 className="projects-h2">Projects</h2>
                <div className="projects-container">
                    <div className="project">
                        <img src={wordwizard} className='projects-img' alt='wordwizard app' />
                        <div className="project-description">
                            <h3 className='project-title-h3'>WordWizard</h3>
                            WordWizard is a web application that functions as a dictionary. Users can search for any word and the app will display the definition using a free dictionary API. It was built using the React JavaScript library.
                            <div className='buttons'>
                                <a href='https://github.com/dlxzeus777/dictionary-web-app' target='_blank' rel='noreferrer'><AiFillGithub className='project-icons' /></a>
                                <a href='https://dlxzeus777.github.io/dictionary-web-app/' target='_blank' rel='noreferrer'><BsFillArrowUpRightSquareFill className='project-icons' /></a>
                            </div>
                        </div>

                    </div>
                    <div className="project">
                        <img src={pwgenerator} className='projects-img' alt='password generator' />
                        <div className="project-description">
                            <h3 className='project-title-h3'>Password Generator</h3>
                            Random password generator with a button to generate new passwords between 5-20 characters and a feature to copy the passwords to clipboard and delete them one by one or clear all at once.
                            <div className='buttons'>
                                <a href='https://github.com/dlxzeus777/password-generator' target='_blank' rel='noreferrer'><AiFillGithub className='project-icons' /></a>
                                <a href='https://dlxzeus777.github.io/password-generator/' target='_blank' rel='noreferrer'><BsFillArrowUpRightSquareFill className='project-icons' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={cryptocloud} className='projects-img' alt='crypto cloud' />
                        <div className="project-description">
                            <h3 className='project-title-h3'>Crypto Cloud</h3>
                            Cryptocloud is a website that allows users to search and learn about various cryptocurrencies and non-fungible tokens (NFTs)
                            <div className='buttons'>
                                <a href='https://github.com/dlxzeus777/Crypto-Cloud' target='_blank' rel='noreferrer'><AiFillGithub className='project-icons' /></a>
                                <a href='https://dlxzeus777.github.io/Crypto-Cloud/' target='_blank' rel='noreferrer'><BsFillArrowUpRightSquareFill className='project-icons' /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects