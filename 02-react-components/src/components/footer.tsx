import React from 'react'
import ReactDOM from 'react-dom'

// FUNCTIONAL COMPONENT EXAMPLE 
interface FooterProps { 
    cLink: string; 
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    return (<p>
        <a href={props.cLink}> Contact us</a>
    </p>)
}

export default Footer

