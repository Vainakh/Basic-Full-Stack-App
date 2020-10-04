import React from 'react'
import axios from 'axios';


export default class ExternalUsers extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      fullAddress: "",
      ssn: ""
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
   
    const stateName = event.target.name;

    this.setState({ [stateName]: event.target.value })
  }

  handleClick() {
    axios.post('/data', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      fullAddress: this.state.fullAddress,
      ssn: this.state.ssn
    })
    .then(function (response) {
      console.log(response);
    })
  }

  render(){

    return(
      <div>
       <form>
        <label htmlFor="firstName">
          First Name: 
          <input 
          name="firstName" 
          type="text" 
          id="firstName" 
          value={this.state.firstName}
          onChange={this.handleChange}
          />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input name="lastName" 
          type="text" 
          id="lastName" 
          value={this.state.lastName}
          onChange={this.handleChange}
          />
        </label>

        <label htmlFor="phone">
          Phone Number:
          <input name="phoneNumber" 
          type="tel" 
          id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          />
        </label>

        <label htmlFor="fullAddress">
          Full Address:
          <input name="fullAddress" 
          type="text" 
          id="fullAddress" 
          value={this.state.fullAddress}
          onChange={this.handleChange}
          />
        </label>

        <label htmlFor="ssn">
          SSN: 
          <input 
          name="ssn" 
          type="text" 
          id="ssn" 
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
          value={this.state.ssn}
          onChange={this.handleChange}
          autoComplete="off"
          />
        </label>
        <button 
        type="button" 
        onClick={this.handleClick}>Submit</button>
       </form>
       
      </div>
    )
  }
}