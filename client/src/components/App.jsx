import React from 'react'
import ExternalUsers from './ExternalUsers.jsx';
import Admin from './Admin.jsx';
import '../styles/app.css';



export default class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      currentView: "ExternalUsers",
    };
    this.changeViewHandler = this.changeViewHandler.bind(this);
  }

  changeViewHandler(){
    let view;

    view = (this.state.currentView === "ExternalUsers") ? "Admin" : "ExternalUsers";
    console.log(view)
    this.setState({ currentView: view});
  }

  render(){
    let view;

    if (this.state.currentView === "ExternalUsers"){
      view = <ExternalUsers />
    } else {
      view = <Admin />
    }

    return(
      <div className="container">
      
        <button className="btn" onClick={() => this.changeViewHandler()}>{this.state.currentView === "Admin" ? "Go to External Users View" : "Go to Admin View"} </button>
  
      
        {view}
      
        
      </div>
    )
  }
}
