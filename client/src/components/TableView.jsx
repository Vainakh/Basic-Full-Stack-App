import React from 'react';
import axios from 'axios';
import '../styles/tableview.css';

 class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }; 
  }

  componentWillMount() {
    axios.get("/data").then(
      response => {
        this.setState({data: response.data})
      })
  }

  render() {
    const tableData = 
    <div>
      <div className="table">
        <div className="label">
        First Name
            {this.state.data.map((item) => {
              return (
                <div className="item">{item.firstName}</div> 
                )}
              )
            }
        </div>
        <div className="label">
        Last Name
          {this.state.data.map((item) => {
            return (
              <div className="item">{item.lastName}</div> 
              )}
            )
          }
        </div>
        <div className="label"> 
        Phone Number   
          {this.state.data.map((item) => {
                return (
              <div className="item">{item.phoneNumber}</div> 
              )}
            )
          }
        </div>
        <div className="label">
            Full Address
          {this.state.data.map((item) => {
                return (
              <div className="item">{item.fullAddress}</div> 
              )}
            )
          }
        </div>
        <div className="label">
            SSN
          {this.state.data.map((item) => {
                return (
              <div className="item">{item.ssn}</div> 
              )}
            )
          }
        </div>
      </div>
    </div>

    return (
      <div>
        {tableData}
        <button className="btnTableView"
        onClick={this.props.changeView}
        >LogOut</button>
      </div>
    )
  }
}

export default TableView;