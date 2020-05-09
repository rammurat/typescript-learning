import React from 'react'
import ReactDOM from 'react-dom'


import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import JSXCounter from '../components/counter-jsx'
import Counter from '../components/counter'
import Weekend from '../components/weekend'

import data from '../data'

interface Props {
}
  
class App extends React.Component<Props, {}> {
    render() {
      return (<React.Fragment>
        <Header userName="John Smith" email="j@smith.com"/>
        {/* <Navigation links={data.navigation.links}/> */}
        <Counter />
        <JSXCounter />
        <Weekend items={data.weekend}/>
        <Footer cLink="https://www.typescript.com/"/>
      </React.Fragment>)
    }
}

export default App
