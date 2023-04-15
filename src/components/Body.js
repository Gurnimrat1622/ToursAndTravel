import "./Body.css";
import destination1 from "../Images/destination1.jpg";
import destination2 from "../Images/destination2.jpg";
import destination3 from "../Images/destination3.jpg";
import destination4 from "../Images/destination4.jpg";
import DestinationData from "./DestinationData";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";

const Body = () => {
  return (
    <div className="Popular-destination">
      <h1>Propular Destination</h1>
      <p>Tour give you the opportunity to see a lot,within a time frame.</p>
      <DestinationData
        heading="Machu Picchu, Peru"
        text="  Machu Picchu is one of the most iconic and awe-inspiring
      destinations in the world. Located high in the Andes mountains of
      Peru, this ancient Incan city is steeped in history, mystery, and
      natural beauty. Visitors to Machu Picchu can expect a truly unique
      and unforgettable experience. The journey usually begins in the
      charming city of Cusco, where travelers can explore the historic
      streets, museums, and markets before embarking on the scenic train
      ride to the town of Aguas Calientes. From there, visitors can take a
      bus up to the entrance of Machu Picchu, where they will be greeted
      by stunning views of the city and surrounding mountains. The
      architecture of Machu Picchu is both intricate and impressive, with
      stone buildings, terraces, and temples that have been finely crafted
      and precisely fitted together. The natural beauty of the site is
      also awe-inspiring, with lush green jungle and steep mountains that
      provide a dramatic backdrop for the ruins. For adventure-seekers,
      Machu Picchu also offers a range of hiking and trekking
      opportunities, including the famous Inca Trail. Travelers can choose
      from a variety of tours and packages, ranging from day trips to
      multi-day expeditions, depending on their interests and preferences."
        img1={destination1}
        img2={destination2}
        className="First-Destination"
      />
      <DestinationData
        heading="Tokyo, Japan"
        text="  Machu Picchu is one of the most iconic and awe-inspiring
      destinations in the world. Located high in the Andes mountains of
      Peru, this ancient Incan city is steeped in history, mystery, and
      natural beauty. Visitors to Machu Picchu can expect a truly unique
      and unforgettable experience. The journey usually begins in the
      charming city of Cusco, where travelers can explore the historic
      streets, museums, and markets before embarking on the scenic train
      ride to the town of Aguas Calientes. From there, visitors can take a
      bus up to the entrance of Machu Picchu, where they will be greeted
      by stunning views of the city and surrounding mountains. The
      architecture of Machu Picchu is both intricate and impressive, with
      stone buildings, terraces, and temples that have been finely crafted
      and precisely fitted together. The natural beauty of the site is
      also awe-inspiring, with lush green jungle and steep mountains that
      provide a dramatic backdrop for the ruins. For adventure-seekers,
      Machu Picchu also offers a range of hiking and trekking
      opportunities, including the famous Inca Trail. Travelers can choose
      from a variety of tours and packages, ranging from day trips to
      multi-day expeditions, depending on their interests and preferences."
        img1={destination3}
        img2={destination4}
        className="Second-Destination"
      />

      <div className="new">
        <h1>Recomended Destination</h1>
      </div>

      <div className="Slider">
        <Slider />
      </div>
    </div>
  );
};
export default Body;
