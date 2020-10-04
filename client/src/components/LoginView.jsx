import React from 'react';
import axios from 'axios';


class LoginView extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }; 
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    let valid;
    console.log(this.props.changeView)
    axios.post('/auth', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      if (response.status === 200){
      // console.log(this.props)
        valid = true;
      } else {
        console.log("Invalid username or password")
      }
    })
    if (valid){
      console.log("true");
      this.props.changeView();
      
    }
    // this.props.changeView();
  }


  onChangeHandler(event){
    console.log(event.target.value)
    const stateName = event.target.name;
    this.setState({ [stateName]: event.target.value })

  }

  render(){
    console.log(this.props)
    return (
      <div>
      <label htmlFor="username"> Username:
       <input 
          name="username" 
          id="username" 
          type="text" 
          value={this.state.username} 
          onChange={this.onChangeHandler}
        />
       </label>
       <label htmlFor="password"> Password:
       <input 
          name="password" 
          id="password" 
          type="password" 
          value={this.state.password}
          onChange={this.onChangeHandler} 
        />
       </label>
       
       <button
       onClick={this.onClickHandler}>LogIn</button>
      </div>
    )
  }
}


export default LoginView;