import React from 'react';
import axios from 'axios';

// const TableView = () => {
//   return <div>Table</div>
// }
//change to class and 


 class TableView extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data: "",
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
        <button 
        onClick={this.props.changeView}
        >LogOut</button>
      </div>
    )
  }
}

export default TableView;