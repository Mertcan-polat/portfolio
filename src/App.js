import React from "react";
import Navbar from "./section/navbar/Navbar";
import Header from "./section/header/Header";
import About from "./section/about/About";
import Services from "./section/services/Services";
import Footer from "./section/footer/Footer";
import Contact from "./section/contact/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
