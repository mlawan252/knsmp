import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Departments from "../../Pages/Departments/Departments";
import Mandate from "../../Pages/Mandate/Mandate";
import Project from "../../Pages/Projects/Project";

function Main() {
  return (
    <div id="about">
      <AboutUs />
      <Mandate />
      <Departments />
      <Project />
      <ContactUs />
    </div>
  );
}

export default Main;
