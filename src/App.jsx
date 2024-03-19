import React from "react";
import Header from "./Components/Header";
import Landing from "./pages/Landing";
import About from "./Components/About";
import Offer from "./Components/Offer";
import Art from "./Components/Art";
import Gilmpse from "./Components/Gilmpse";
import Testimonials from "./Components/Testimonials";
import Apointment from "./Components/Apointment";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Offer />
      <Art />
      <Gilmpse />
      <Testimonials />
      <Apointment />
      <Footer />
    </div>
  );
}

export default App;
