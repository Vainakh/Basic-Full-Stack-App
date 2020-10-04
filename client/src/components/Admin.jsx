import React from 'react'
import axios from 'axios';


export default class Admin extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data: ""
    };
    
  }

  componentDidMount(){
    axios.get("/data").then(
      response => {
        console.log(response)
        this.setState({data: JSON.stringify(response)})
      }
    )
  }

  render(){

    return(
      <div>
       {this.state.data}
      </div>
    )
  }
}








