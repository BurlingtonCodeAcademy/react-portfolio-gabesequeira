import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            // Section: About 
            <section id='about'>
                <div className='container'>
                    <h2 className='heading'>Get to Know <span className='heading'>Me</span></h2>
                    <div className='about-content'>
                        <h3>A Little Bit <span className='text-primary'>About Myself</span></h3>
                        <p className='lead'>My name is Gabe I grew up in Montpelier Vermont.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;