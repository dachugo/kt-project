import { ReactLenis } from "lenis/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";
import CountDownText from "./components/CountDownText";
import CountDown from "./components/CountDown";
import Planes from "./components/Planes";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <Tour />
      <CountDownText />
      <CountDown />
      <Planes />
      <Sponsors />
      <Footer />
    </ReactLenis>
  );
}

export default App;
