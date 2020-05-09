import React from 'react'
import ReactDOM from 'react-dom'


import Header from '../components/header'
import Footer from '../components/footer'

interface Props {
}
  
class App extends React.Component<Props, {}> {
    render() {
      return (<React.Fragment>
        <Header userName="John Smith" email="j@smith.com"/>
        <Footer cLink="https://www.typescript.com/"/>
      </React.Fragment>)
    }
}

export default App
