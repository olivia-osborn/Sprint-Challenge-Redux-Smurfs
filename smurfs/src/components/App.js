import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  state = {
    smurf: {
      name: "",
      age: null,
      height: "",
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value
    }})
  }

  // addSmurf = e => {
  //   e.preventDefault;
  //   this.props.addNewSmurf(this.state.smurf)
  // }

  render() {
    return (
      <div className="App">
        <SmurfList/>
        <SmurfForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //import state here
}

export default connect(
  mapStateToProps,
  {
    //add action creators here
  }
)(App)