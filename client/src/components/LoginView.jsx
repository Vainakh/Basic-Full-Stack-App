import React from 'react';


class LoginView extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }; 
    this.onChangeHandler = this.onChangeHandler.bind(this);
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
       onClick={this.props.changeView}>LogIn</button>
      </div>
    )
  }
}


export default LoginView;