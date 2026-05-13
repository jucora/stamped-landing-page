import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import SecondaryCTA from "./components/SecondaryCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Positioning />
      <HowItWorks />
      <FAQ />
      <SecondaryCTA />
      <Footer />
    </>
  );
}
