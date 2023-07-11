// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  buttonText = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="heading">Welcome</h1>
          <p className="text">Thank you! Happy Learning</p>
          <button
            type="button"
            className="subscribe-button"
            onClick={this.buttonText}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
