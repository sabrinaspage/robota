import { NavLinkType } from "../components/Navbar";
import { ButtonTypes } from "../components/RobotaButton";

export const homepageLinks: NavLinkType[] = [
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

export const homepageButtons: NavLinkType[] = [
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
