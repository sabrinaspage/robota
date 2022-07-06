import Deloitte from "../images/company-carousel/deloitte.png";
import Microsoft from "../images/company-carousel/microsoft.png";
import Twilio from "../images/company-carousel/twilio.png";

import Person1 from "../images/alumni-logos/Person1.png";
import Person2 from "../images/alumni-logos/Person2.png";
import Person3 from "../images/alumni-logos/Person3.png";

const textAndImage = [
  {
    brand: Deloitte,
    alumni: Person1,
    bgColor: "#EBFDFC",
  },
  {
    brand: Microsoft,
    alumni: Person2,
    bgColor: "#CCF9F6",
  },
  { brand: Twilio, alumni: Person3, bgColor: "#ACDFDC" },
];

const AlumniSection = () => (
  <div className="container mt-5">
    <div className="row">
      {textAndImage.map(({ brand, alumni, bgColor }) => (
        <div
          style={{ backgroundColor: bgColor }}
          className="col-sm d-flex flex-column mx-5 px-3 pt-2 rounded-5"
        >
          <div className="justify-content-start my-2">
            <img src={brand} alt="brand" width="180" height="relative" />
          </div>
          <div className="d-flex justify-content-center mt-auto">
            <img src={alumni} alt="alumni" width="200" height="relative" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default AlumniSection;
