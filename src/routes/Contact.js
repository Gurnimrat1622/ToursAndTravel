import ContactFrom from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Template from "../components/Template";
import AboutImage from "../Images/Contact.jpg";

function Contact() {
  return (
    <div>
      <Navbar />
      <Template
        temp="abouttemp"
        template={AboutImage}
        title="Contact"
        anchor="hide"
      />
      <ContactFrom />
    </div>
  );
}
export default Contact;
