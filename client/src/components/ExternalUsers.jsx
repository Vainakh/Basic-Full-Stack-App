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
       </form>
      </div>
    )
  }
}