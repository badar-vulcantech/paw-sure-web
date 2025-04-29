import Header from "../../components/ui/Header/Header";
import React from "react";
import HeroSection from "./HeroSection";
import FavoriteBreeds from "./FavoriteBreeds";
import Footer from "../../components/ui/Footer/Footer";
import Services from "./Services";
import OurPuppyBreeds from "./OurPuppyBreeds";
import BrowseAllPuppies from "./BrowseAllPuppies";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FavoriteBreeds />
      <Services />
      <OurPuppyBreeds />
      <BrowseAllPuppies />
      <Footer />
    </div>
  );
};

export default LandingPage;
