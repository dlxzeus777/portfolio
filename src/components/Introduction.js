import { useRef, useEffect, useState } from 'react';
import profilePic from '../assets/pfp.jpg'
import { Button } from '@chakra-ui/react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { RoughNotation } from "react-rough-notation";
const Introduction = () => {

    const myRef = useRef()
    const [isVisible, setIsVisible] = useState();

    useEffect(() =>
    {
        const observer = new IntersectionObserver((entries) =>
        {
            const entry = entries[0]
            if(entry.isIntersecting)
            {
                setIsVisible(true)
            }
            else
            {
                return
            }
        })
        observer.observe(myRef.current)
    }, [])
    
    return (
        <section className='intro-section' id='home'>
            <div className="wrapper intro">
                <div className='introduction-container'>
                    <img src={profilePic} className='profile-pic' alt='face' />
                    <div className='introduction-text'>
                        <h1 className='intro-h1'>Hi, I'm Laci!</h1>
                        <p className='intro-p'>I am a <span ref={myRef}><RoughNotation type='highlight' show={isVisible} animationDelay={1000}><span className='teal'>Front-end developer</span></RoughNotation></span> based in Hungary. I'm passionate about building accessible web apps or websites that users love!</p>
                        <Button colorScheme='teal' variant='solid' className='projects-btn'><a href='#projects'>Projects</a></Button>
                    </div>
                </div>
            </div>
            <AiOutlineArrowDown className='arrow-down'/>
        </section>
    )
}

export default Introduction