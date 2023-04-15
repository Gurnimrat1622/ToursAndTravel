import { Component } from "react";
import "./Body.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="Destination-description">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text} </p>
        </div>
        <div className="destination-img">
          <img src={this.props.img1} alt="destination"></img>
          <img src={this.props.img2} alt="destination"></img>
        </div>
      </div>
    );
  }
}
export default DestinationData;
