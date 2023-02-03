import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSun } from 'react-icons/bi'
import { HiMoon } from 'react-icons/hi'
import { useContext, useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { ThemeContext } from '../context/context'

const Header = () => {

    const { theme, modes } = useContext(ThemeContext)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <header>
            <div className="logo">Sinka Laszlo</div>
            <div className="header-anchors">
                <a href="#home" className='nav-items'>Home</a>
                <a href="#about" className='nav-items'>About</a>
                <a href="#projects" className='nav-items'>Projects</a>
                <button className='theme-changer' onClick={modes}>{theme ? <HiMoon /> : <BiSun />}</button>
            </div>
            <GiHamburgerMenu className='hamburger-icon' ref={btnRef} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay /> 
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <div className='mobile-nav'>
                            <a href="#home" onClick={onClose} className='mobile-nav-items'>Home</a>
                            <a href="#about" onClick={onClose} className='mobile-nav-items'>About</a>
                            <a href="#projects" onClick={onClose} className='mobile-nav-items'>Projects</a>
                            <button className='theme-changer' onClick={modes}>{theme ? <HiMoon /> : <BiSun />}</button>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </header>
    )
}

export default Header