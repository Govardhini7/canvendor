import React, { Component } from 'react'

export class Product extends Component {
    constructor(){
        super()
        this.state={
          name :"",
          list:[],
        }
      }
     
      Remove(index){
        const newList2 = this.state.list.filter((item,i) => i !== index)
        console.log(newList2)
        this.setState({list:newList2})
      }
  render() {
    return (
      <div>
        <h3>Add products below</h3>
      {/* <EasybaseProvider /> */}
      <input type='text' onChange={(e)=> this.setState({name: e.target.value})} />
      <button onClick={()=>{
        const copylist = [...this.state.list]
        copylist.push(this.state.name)
        console.log(copylist)
        this.setState({list:copylist })
      }}>ADD</button>

      <ul>
        {
          this.state.list.map((data, index) => <li key={index}>
          <div>
          {/* <RouterLink to="/name/index">{data}</RouterLink> */}
          {/* <RouterView /> */}
          {data}
          <button onClick={() => {this.Remove(index)}}> Delete</button>
          {/* <button >Update</button> */}
          </div>
          </li>)
        }
      </ul>
      </div>
    )
  }
}

export default Product