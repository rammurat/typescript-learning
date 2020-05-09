import React from 'react'
import ReactDOM from 'react-dom'

interface NavigationProps { 
    links: []; 
}

export const Navigation = (props: NavigationProps) => {
    return (<p>
        <a href={props.links[0]}> Contact us</a>
    </p>)
}

export default Navigation

