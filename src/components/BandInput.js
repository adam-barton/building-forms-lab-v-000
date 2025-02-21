// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.addBand(this.state)

    this.setState({
      name: ''
    })

  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add a band </label>
          <input
            type="text" 
            onChange={this.handleChange} 
            value={this.state.name}
            />
          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default BandInput;
