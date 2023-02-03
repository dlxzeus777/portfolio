import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear()
    return (
        <footer>
            <div className="wrapper">
                <div className='footer-container'>
                    <div className="copyright">&#169; {currentYear} Sinka Laszlo</div>
                    <div className="social-media-icons">
                        <a href='https://www.linkedin.com/in/sinka-laszlo-272973254/' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
                        <a href='https://twitter.com/dlxzeus777' target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
                        <a href='https://github.com/dlxzeus777' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer