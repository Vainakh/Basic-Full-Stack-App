import React from 'react';
import axios from 'axios';
import '../styles/loginview.css';


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

  onClickHandler(){
    console.log(this.props.changeView)
    axios.post('/auth', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      if (response.status === 200){
      console.log(this.props)
      console.log("200")
      this.props.changeView();
      } else {
        console.log("Invalid username or password")
      }
    })
    // if (valid){
    //   console.log("true");
     
      
    // }
    // this.props.changeView();
  }


  onChangeHandler(event){
    // console.log(event.target.value)
    const stateName = event.target.name;
    this.setState({ [stateName]: event.target.value })

  }

  render(){
    // console.log(this.props)
    return (
      <div>
        <div className="container">
          <div className="row">
              <div className="col-25">
                <label htmlFor="username"> Username:</label>
              </div>
              <div className="col-75">
              <input
                placeholder="Username"
                name="username" 
                id="username" 
                type="text" 
                value={this.state.username} 
                onChange={this.onChangeHandler}
              /> 
              </div>
          </div>
       

          
          <div className="row">
              <div className="col-25">
                <label htmlFor="password"> Password: </label>
              </div>

              <div className="col-75">
                <input 
                  placeholder="Password"
                  name="password" 
                  id="password" 
                  type="password" //hiding password characters in the input
                  value={this.state.password}
                  onChange={this.onChangeHandler} 
                />
            </div>
         </div>
       
      
          <div className="row">
          <button 
          className="BtnLoginView"
          onClick={ this.onClickHandler}>LogIn</button>
          </div>
        </div>
      </div>
    )
  }
}


export default LoginView;