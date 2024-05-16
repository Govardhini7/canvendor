import React from 'react'
import { createMemoryHistory, createRouter } from 'vue-router'
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Admin from './components/Admin'

class App extends React.Component{
  constructor(){
    super()
    this.state={
    }
  }
  
  render(){
    return(
      <>
      {/* <img src={logo} className="logo" alt="logo" /> */}
       <Admin />
       </>
    )
   }
}
export default App