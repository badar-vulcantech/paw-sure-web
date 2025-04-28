import Header from "../../components/ui/Header/Header";
import React from "react";
import HeroSection from "./HeroSection";
import FavoriteBreeds from "./FavoriteBreeds";
import Footer from "../../components/ui/Footer/Footer";
import Services from "./Services";
import OurPuppyBreeds from "./OurPuppyBreeds";
import BrowseAllPuppiesBtn from "../../components/ui/buttons/BrowseAllPuppiesBtn";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FavoriteBreeds />
      <Services />
      <OurPuppyBreeds />
      <BrowseAllPuppiesBtn />
      <Footer />
    </div>
  );
};

export default LandingPage;
