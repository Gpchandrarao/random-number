// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  onRandomNumber = () => {
    const getRandom = Math.ceil(Math.random() * 100)
    this.setState({random: getRandom})
  }

  render() {
    const {random} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="random-heading">Random Number</h1>
          <p className="random-description">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.onRandomNumber}>
            Generate
          </button>
          <p className="random-number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
