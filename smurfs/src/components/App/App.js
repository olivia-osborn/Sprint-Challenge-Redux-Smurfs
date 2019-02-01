import React, { Component } from 'react';
import "./App.css"
import { connect } from "react-redux";
import { getSmurfs, addNewSmurf,deleteSmurfAction } from "../../actions";
import SmurfList from "../SmurfList/SmurfList";
import SmurfForm from "../SmurfForm/SmurfForm";

class App extends Component {
  state = {
    smurf: {
      name: "",
      age: null,
      height: "",
    }
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value
    }})
  }

  addSmurf = e => {
    e.preventDefault();
    this.state.smurf.name && 
    this.state.smurf.age && 
    this.state.smurf.height && 
    this.props.addNewSmurf(this.state.smurf)
  }

  deleteSmurf = (e, idx) => {
    e.preventDefault();
    console.log("index", idx)
    this.props.deleteSmurfAction(idx)
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Welcome to Smurf Village!</h1>
          <h2>Meet the smurfs:</h2>
        </div>
        {this.props.isFetchingSmurfs && "Wait while we fetch your data..."}
        {this.props.smurfList && (
          <SmurfList 
            smurfList={this.props.smurfList}
            deleteSmurf={this.deleteSmurf} 
          />
        )}
        {this.props.error && (
          <p>{`${this.props.error}`}</p>
        )}
        <SmurfForm
          handleChanges={this.handleChanges}
          addSmurf={this.addSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfList: state.smurfList,
  isFetchingSmurfs: state.isFetchingSmurfs,
  error: state.error
})

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addNewSmurf,
    deleteSmurfAction
  }
)(App)