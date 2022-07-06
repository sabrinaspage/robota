import Deloitte from "../images/company-carousel/deloitte.png";
import Microsoft from "../images/company-carousel/microsoft.png";
import Twilio from "../images/company-carousel/twilio.png";

import Person1 from "../images/alumni-logos/Person1.png";
import Person2 from "../images/alumni-logos/Person2.png";
import Person3 from "../images/alumni-logos/Person3.png";
import RobotaButton, { ButtonTypes } from "./RobotaButton";

const textAndImage = [
  {
    brand: Deloitte,
    alumni: Person1,
    bgColor: "#EBFDFC",
    quote:
      "“Robota enabled me to learn employable skills and has changed my life.”",
    who: "From Zaporizhia, working on-site in Poland for SAP",
    storyLink: "#",
  },
  {
    brand: Microsoft,
    alumni: Person2,
    bgColor: "#CCF9F6",
    quote: "“By joining Robota, I received became an even better engineer.”",
    who: "From Kherson, working on-site in Poland for Microsoft",
    storyLink: "#",
  },
  {
    brand: Twilio,
    alumni: Person3,
    bgColor: "#ACDFDC",
    quote:
      "“Before joining Robota, I felt incapable. Now, I meet with mentors from top companies.”",
    who: "From Elizabeth, working on-site in Poland for  Twilio",
    storyLink: "#",
  },
];

const AlumniSection = () => (
  <div className="container mt-5">
    <div className="row">
      {textAndImage.map(({ brand, alumni, bgColor, quote, who, storyLink }) => (
        <>
          <div className="col-sm d-flex flex-column rounded-5 mx-5">
            <div
              style={{ backgroundColor: bgColor }}
              className="px-3 pt-2 rounded-5"
            >
              <div className="justify-content-start my-2">
                <img src={brand} alt="brand" width="180" height="relative" />
              </div>
              <div className="d-flex justify-content-center mt-auto">
                <img src={alumni} alt="alumni" width="200" height="relative" />
              </div>
            </div>
            <h4 className="display-7 mt-1 fw-bold">{quote}</h4>
            <h6 className="mt-1">{who}</h6>
            <div className="mt-auto">
              <RobotaButton
                title="Read More"
                urlPath={storyLink}
                type={ButtonTypes.CONTAINED_LARGE}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
);
export default AlumniSection;
