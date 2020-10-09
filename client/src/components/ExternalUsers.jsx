import React from 'react'
import axios from 'axios';
import '../styles/externaluser.css';


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
      <div className="container">
       <form>

          <div className="row">
            <div className="col-25">
              <label htmlFor="firstName">
                First Name:
              </label>
            </div>

            <div className="col-75">
              <input 
                placeholder="First Name" 
                name="firstName" 
                type="text" 
                id="firstName" 
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>  

            <div className="row">
              <div className="col-25">
                <label htmlFor="lastName">
                  Last Name:
                </label>
              </div>

              <div className="col-75">
                <input 
                placeholder="Last Name" 
                name="lastName" 
                type="text" 
                id="lastName" 
                value={this.state.lastName}
                onChange={this.handleChange}
                />
              </div>
            </div>  
           
            {/* <div class="row">
              <div className="col-25">
                <label htmlFor="phone">
                  Phone Number:
                  </label>
              </div>

              <div className="col-75">
                  <input
                  placeholder="Phone Number"  
                  // name="phoneNumber" 
                  // type="number" 
                  // id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  />
              </div>
            </div> */}

            <div className="row">  
              <div className="col-25">
                <label htmlFor="fullAddress">
                  Full Address:
                </label>
              </div>

              <div className="col-75">
                <input
                placeholder="Full Address"   
                name="fullAddress" 
                type="text" 
                id="fullAddress" 
                value={this.state.fullAddress}
                onChange={this.handleChange}
                />
              </div> 
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="phone">
                  Phone Number:
                  </label>
              </div>

              <div className="col-75">
                  <input
                  placeholder="Phone Number"  
                  name="phoneNumber" 
                  type="tel" 
                  id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  />
              </div>
            </div>

            <div className="row">   
              <div className="col-25">
                <label htmlFor="ssn">
                    SSN:
                </label>
              </div> 

              <div className="col-75">
                <input
                placeholder="SSN"  
                name="ssn" 
                type="text" 
                id="ssn" 
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
                value={this.state.ssn}
                onChange={this.handleChange}
                autoComplete="off"
                />
              </div> 
            </div>

          

          <div className="row">
            <button className="BtnExternalUser"
            type="button" 
            onClick={this.handleClick}>Submit</button>
          </div>
            
          
        </form>
       
      </div>
    )
  }
}