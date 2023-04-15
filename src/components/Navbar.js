import { Component } from "react";
import "./Navbar.css";
import { FcHome, FcAbout, FcServices, FcContacts } from "react-icons/fc";
import { GoSignIn } from "react-icons/go";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Odyssey Outings</h1>
        <div className="menu" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fa-sharp fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">
              <FcHome className="icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <FcAbout className="icon" />
              <span>About</span>
            </a>
          </li>

          <li>
            <a href="/contact">
              <FcContacts className="icon" />
              <span>Contact</span>
            </a>
          </li>

          <li>
            <a href="/signup">
              <GoSignIn className="signup" />
              <span id="Register">Register</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
