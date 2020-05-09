import React from 'react'
import ReactDOM from 'react-dom'

interface HeaderProps { 
    userName: string; 
    email: string; 
}

const Header = (props: HeaderProps) => {
    return (<h3>
        Hello {props.userName}, you are registered with {props.email}!
    </h3>)
}

export default Header;