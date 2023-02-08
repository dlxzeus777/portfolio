import { BiSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

import { useContext } from 'react'
import { ThemeContext } from '../context/context'

const Header = () => {

    const { theme, modes } = useContext(ThemeContext)



    return (
        <nav>
            <ul className='nav-ul'>
                <a href='#home' className='nav-li first'>
                    <AiOutlineHome className='nav-icons' />
                    <span className='link-text'>Home</span>
                </a>
                <a href='#about' className='nav-li'>
                    <CgProfile className='nav-icons' />
                    <span className='link-text'>About</span>
                </a>
                <a href='#projects' className='nav-li'>
                    <AiOutlineFundProjectionScreen className='nav-icons' />
                    <span className='link-text'>Projects</span>
                </a>
                <div onClick={modes} className='nav-li'>
                    {theme ? <><HiMoon className='nav-icons' /><span className='link-text'>Dark</span></> : <><BiSun className='nav-icons' /><span className='link-text'>Light</span></>}
                </div>
            </ul>
        </nav>
    )
}

export default Header