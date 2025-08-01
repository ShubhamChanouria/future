
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoboticNews from "./components/RoboticNews";
import TeachingAI from "./components/TeachingAI";
import FeaturesGrid from "./components/FeaturesGrid";
import FutureTechSection from "./components/FutureTechSection";
import FutureList from "./components/FutureList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <RoboticNews/>
    <TeachingAI/>
    <FeaturesGrid/>
    <FutureTechSection/>
    <FutureList/>
    <Footer/>
    </div>
  );
}
