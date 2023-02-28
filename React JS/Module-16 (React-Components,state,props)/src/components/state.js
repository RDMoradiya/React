
import React, { Component } from 'react'

class State extends Component {
    constructor() {
        super();
        this.state = {
            user: "Raj Moradiya",
            years: 26
        }
    }
    // changestate () {
    changestate = () => {
        console.log(this.state)
        this.setState({ user: "Raj Dahyabhai Moradiya", years: "45" }, function () {
            console.log(this.state)
        }
        );
    }
    render() {
        return (
            <>
                <h3>Dear {this.state.user}, {this.state.years} years, Welcome to React</h3>
                <br />

                {/* <button onClick={() => this.changestate()}> Click Me </button> for normal function*/}
                {/* <button onClick={this.changestate()> Click Me </button> for arrow function*/}
                {/* <button onClick={this.changestate.bind(this)}> Click Me </button> for both normal & arrow*/}

                <button onClick={this.changestate}> Click Me </button>
            </>
        )
    }
}
export default State

