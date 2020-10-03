import React from 'react'


export default class ExternalUsers extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telephoneNumber: "",
      fullAddress: "",
      ssn: ""
    };
   
  }

  

  render(){

    return(
      <div>
       <form>
       External users Frontend should provide a simple form for users to enter their personal
info including First Name, Last Name, Telephone Number, Full Address, and SSN.
        <label htmlFor="firstName">
          First Name: 
          <input name="firstName" type="text" id="firstName" value="First Name"/>
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input name="lastName" type="text" id="lastName" value="Last Name"/>
        </label>

        <label htmlFor="phone">
          Phone Number:
          <input name="phone" type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value="Phone Number"/>
        </label>

        <label htmlFor="fullAddress">
          Full Address:
          <input name="fullAddress" type="text" id="fullAddress" value="Full Address"/>
        </label>

        <label htmlFor="ssn">
          SSN: 
          <input name="ssn" type="text" id="ssn" value="SSN"/>
        </label>

       </form>
      </div>
    )
  }
}