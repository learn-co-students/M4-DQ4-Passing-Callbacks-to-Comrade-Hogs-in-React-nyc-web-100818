import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      environment: this.props.environment
    }
  }

  panic = () => {
    if (this.state.environment === "inhospitable") {
      return <img className="exclamation" src={exclamation} alt="" />
    }
  }

  shouldComponentUpdate = () => {
    console.log(this.state.environment);
    // if (this.state.environment === "inhospitable") {
    //   console.log("change");
    // }
  }



  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.shouldComponentUpdate()}
      </div>
    )
  }
}
