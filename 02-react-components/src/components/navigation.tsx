import React from 'react'
import ReactDOM from 'react-dom'

interface NavigationProps { 
    links: []; 
}

export const Navigation = (props: NavigationProps) => {
    return (<div className="t-navigation">
        {/* <a href={props.links[0]}> Contact us</a> */}
    </div>)
}

export default Navigation

