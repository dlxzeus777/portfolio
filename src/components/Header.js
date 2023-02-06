import { RxHamburgerMenu } from 'react-icons/rx'
import { BiSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'
import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../context/context'

const Header = () => {

    const { theme, modes } = useContext(ThemeContext)

    const [sidebarToggled, setSidebarToggled] = useState(false)

    const sidebarRef = useRef()

    useEffect(() => {
        function handler(e) {
            if (sidebarRef.current) {
                if (!e.target.classList.contains('sidebar') && !e.target.classList.contains('hamburger-icon')) {
                    setSidebarToggled(false)
                }
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }


    })



    return (
        <header>
            <div className="logo">Sinka Laszlo</div>
            <div className="header-anchors">
                <a href="#home" className='nav-items'>Home</a>
                <a href="#about" className='nav-items'>About</a>
                <a href="#projects" className='nav-items'>Projects</a>
                <button className='theme-changer' onClick={modes}>{theme ? <HiMoon /> : <BiSun />}</button>
            </div>
            <RxHamburgerMenu className='hamburger-icon' onClick={() => setSidebarToggled(true)} />
            <aside ref={sidebarRef} className={`sidebar ${sidebarToggled ? 'active' : ''}`}>
                <div className='exit-container'>
                    <button className='exit-btn' onClick={() => setSidebarToggled(false)}>X</button>
                </div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <button className='theme-changer' onClick={modes}>{theme ? <HiMoon /> : <BiSun />}</button>
            </aside>
        </header>
    )
}

export default Header