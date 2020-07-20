import React from 'react'

class Work extends React.Component {
    constructor (props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div id='content'>
            <h1>Work History</h1>
            <ul>
                <li>Family Dollar</li>
                <li>Okemo</li>
                <li>Mac's Market</li>
                <li>Shaw's</li>
            </ul>
            </div>
        )
    }
}

export default Work;