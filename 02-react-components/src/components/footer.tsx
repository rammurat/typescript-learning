import React from 'react'
import ReactDOM from 'react-dom'

interface FooterProps { 
    cLink: string; 
}

export const Footer = (props: FooterProps) => {
    return (<p>
        <a href={props.cLink}> Contact us</a>
    </p>)
}

export default Footer

