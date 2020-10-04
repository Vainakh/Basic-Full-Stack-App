import React from 'react'
import axios from 'axios';
import LoginView from './LoginView.jsx';
import TableView from './TableView.jsx';


export default class Admin extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      currentView: "LoginView"
    };
    this.changeView = this.changeView.bind(this);
  }

  

  changeView(){
    let view;

    view = (this.state.currentView === "LoginView") ? "TableView" : "LoginView";
  
    this.setState({ currentView: view});
  }

  render(){

    let view;

    if (this.state.currentView === "LoginView"){
      view = <LoginView />
    } else {
      view = <TableView />
    }

    return(
      <div>
        {view}
        <button onClick={this.changeView}>Login</button>
        
      </div>
    )
  }
}

//create terniary between login and logout








