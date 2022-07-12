import React from "react";
import CandidatesSection from "../components/Homepage/CandidatesSection";
import CompanyCarousel from "../components/Homepage/CompanyCarousel";
import Hero from "../components/Homepage/Hero";
import Navbar from "../components/Navbar";
import Impressions from "../components/Homepage/Impressions";
import IWantSection from "../components/Homepage/IWantSection";
import AlumniSection from "../components/Homepage/AlumniSection";
import Footer from "../components/Homepage/Footer";
import { homepageButtons, homepageLinks } from "../consts/constants";

function Homepage() {
  return (
    <div className="App">
      <Navbar links={homepageLinks} buttons={homepageButtons} />
      <Hero />
      <h3 className="display-7 text-center my-5 pb-2">Our Hiring Partners</h3>
      <div className="mx-3">
        <CompanyCarousel />
      </div>
      <CandidatesSection />
      <h3 className="display-6 text-center my-5 pb-2 fw-bold">
        Unlocking human potential and enabling Ukranians to continue working,
        wherever they are.
      </h3>
      <Impressions />
      <IWantSection />
      <h3 className="display-7 text-center my-5 pb-2">Our Alumni</h3>
      <AlumniSection />
      <Footer />
    </div>
  );
}

export default Homepage;
