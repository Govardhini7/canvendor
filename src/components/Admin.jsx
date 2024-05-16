import React, { Component } from 'react'
import Product from './Product'

export class Admin extends Component {

 
  constructor(){
    super()
    this.state={
      
      username:"",
      password:""
    }
    
   
  }
 
  handleSubmit =(e) =>{
    alert(`${this.state.username} ${this.state.password}`)
    e.preventDefault()
    // var found =false;
    // if(username === 'admin' && password === 'admin')
    //   {
    //     found = true
    //    }
    //   if(found){<Product />}
    //   return found;
 }
  
  render() {
    return (
      <div>

      <h1>Ecommerce website</h1>
      <h3>Login with the form below</h3>

      <form onSubmit={this.handleSubmit} >

      <label>User Name</label>
      <input type='text'placeholder='e.g. John' value={this.state.username} 
      onChange={(e)=> this.setState({username: e.target.value})} />

      <label>Password</label>
      <input type='password'placeholder='12345' value={this.state.password} 
      onChange={(e)=> this.setState({password: e.target.value})} />

      <button type='submit'>LOGIN</button>
      </form>
      
        {/* {found && <Product />} */}
      <Product />
      </div>
    )
  }
}

export default Admin