import Navbar from "../components/Navbar";
import Template from "../components/Template";
import "./About.css";
import AboutImage from "../Images/About.jpg";
import destination5 from "../Images/destination3.jpg";
import destination6 from "../Images/destination4.jpg";
function About() {
  return (
    <div>
      <Navbar />
      <Template
        temp="abouttemp"
        template={AboutImage}
        title="About"
        anchor="hide"
      />
      <div className="container2">
        <div className="about1">
          <div className="about-description">
            <h4>About Us</h4>
            <h3>
              We Want you to explore the world, create unforgettable memories.
            </h3>
            <p>
              Welcome to our tours and travel website! We are a team of
              passionate travel enthusiasts who believe that traveling is one of
              the most enriching experiences one can have in life. Our goal is
              to help you explore the world and create unforgettable memories
              through exceptional travel experiences. We offer a wide range of
              travel services, including flights, hotels, tours, cruises, and
              customized travel packages that cater to your specific interests
              and preferences. Our team consists of experienced travel
              professionals who are dedicated to ensuring that your travel needs
              are met with the utmost care and attention to detail. At our tours
              and travel website, we believe that traveling should be accessible
              to everyone, regardless of their budget. We offer competitive
              pricing and flexible payment options to make travel planning easy
              and affordable. Thank you for considering us as your travel
              partner. We look forward to helping you plan your next adventure
              and creating lifelong memories!
            </p>
          </div>
          <div className="img3">
            <img src={destination5} alt=""></img>
            <img src={destination6} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
