import React from 'react'
import ReactDOM from 'react-dom'


import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import JSX from '../components/jsx'

import data from '../data'

interface Props {
}
  
class App extends React.Component<Props, {}> {
    render() {
      return (<React.Fragment>
        <Header userName="John Smith" email="j@smith.com"/>
        <Navigation links={data.navigation.links}/>
        <JSX />
        <Footer cLink="https://www.typescript.com/"/>
      </React.Fragment>)
    }
}

export default App
