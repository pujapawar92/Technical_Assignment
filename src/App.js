import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import AboutSection from './Components/AboutSection';
import TrophyHeader from './Components/TrophyHeader';
import AboutUs from './Components/AboutUs';
import BannerImg2 from './Components/BannerImg2';
import KeyStructure from './Components/KeyStructure';
import Glimpse from './Components/Glimpse';
import Program from './Components/Program';
import AdopNature from './Components/AdopNature';
import Launching from './Components/Launching';
import Professionals from './Components/Professionals';
import CoachesEvents from './Components/CoachesEvents';
import Footer from './Components/Footer';
import BottomPage from './Components/BottomPage';


function App() {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      <TrophyHeader />
      <Hero />
      <AboutSection />
     <BannerImg2 />
      <KeyStructure />
      <Glimpse />
      <Program />
      <AdopNature />
      <Launching />
      <Professionals />
      <CoachesEvents />
      <Footer />
      
    </div>
  );
}


export default App;




// import React from "react";
// import Homepage from "./Pages/Home";



// export default function App() {
//   return <Homepage />;
// }
