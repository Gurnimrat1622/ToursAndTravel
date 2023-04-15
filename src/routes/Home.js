import Navbar from "../components/Navbar";
import Template from "../components/Template";
import destination1 from "../Images/destination2.jpg";
import Body from "../components/Body";
function Home() {
  return (
    <div>
      <Navbar />
      <Template
        temp="hometemp"
        template={destination1}
        title="Unlock your wanderlust with our travel expertise."
        text="Choose Your Favourite Destination"
        btn="Travel More"
        url="/"
        anchor="show"
      />
      <Body />
    </div>
  );
}
export default Home;
