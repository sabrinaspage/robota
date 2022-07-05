import React from "react";
import CandidatesSection from "../components/CandidatesSection";
import CompanyCarousel from "../components/CompanyCarousel";
import Hero from "../components/Hero";
import Navbar, { NavLinkType } from "../components/Navbar";
import { ButtonTypes } from "../components/RobotaButton";

const homepageLinks: NavLinkType[] = [
  {
    title: "About Us",
    urlPath: "#",
  },
  {
    title: "Our Program",
    urlPath: "#",
  },
  {
    title: "Community",
    urlPath: "#",
  },
  {
    title: "Hiring Partners",
    urlPath: "#",
  },
];

const homepageButtons: NavLinkType[] = [
  {
    title: "Apply",
    urlPath: "#",
    type: ButtonTypes.OUTLINE_LARGE,
  },
  {
    title: "Hire",
    urlPath: "#",
    type: ButtonTypes.CONTAINED_LARGE,
  },
  {
    title: "ENG",
    urlPath: "#",
    type: ButtonTypes.CONTAINED_LARGE,
  },
];

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
    </div>
  );
}

export default Homepage;
