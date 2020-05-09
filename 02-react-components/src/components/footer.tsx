import React from 'react'
import ReactDOM from 'react-dom'

import Link from './link'

// FUNCTIONAL COMPONENT EXAMPLE 
interface FooterProps { 
    cLink: string; 
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    return (<footer>
        <h3>Footer</h3>
        <a href={props.cLink}> Contact us</a>

        <Link active={true} onClick={() => {} }> I'm button </Link>
    </footer>)
}

export default Footer

