import Nav from "./Navbar"
// import Carousel from "./Carousel"
import Header from "./header";
// import './img/hostel.jpg'
import Footer from "./Footer";

function WelcomePage() {
  return (
    <div>
      <header class="header-blue">
        <Nav/>
        <Header/>
      </header>
      <Footer/>
    </div>
  );
}

export default WelcomePage;