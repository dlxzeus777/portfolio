import { Badge } from "@chakra-ui/react"
import { RoughNotation } from "react-rough-notation"

const About = () => {
    return (
        <section id="about">
            <div className="wrapper">
                <h2 className="about-me-h2">About Me</h2>
                <div className="about-containers">
                    <div className="get-to-know-me">
                        <h3 className="about-h3">Get to know me!</h3>
                        <RoughNotation type="bracket" color="#319795" brackets={['left', 'right']} show={true} strokeWidth='3px' animationDelay={4000} animationDuration={2500}><p>Nice to meet you my name is Laci and I am a highly ambitious, self-motivated, and driven Front-End Developer based in Hungary.</p>
                            <p>I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, traveling, to working out, I am always seeking new experiences and love to keep myself engaged and learning new things.</p>
                            <p>I believe that you should never stop growing and that's what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities.</p></RoughNotation>
                    </div>
                    <div className="my-skills">
                        <h3 className="about-h3">My Skills</h3>
                        <div className="skills">
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                HTML
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                CSS
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                JavaScript
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                React
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                Git
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                GitHub
                            </Badge>
                            <Badge ml='3' mb='3' fontSize='1em' colorScheme='teal'>
                                Accessibility
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About