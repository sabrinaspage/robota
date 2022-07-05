import React from "react";
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
    </div>
  );
}

export default Homepage;
