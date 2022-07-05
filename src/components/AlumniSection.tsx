import SAP from "../images/company-carousel/company9.png";
import Microsoft from "../images/company-carousel/company7.png";
import Accenture from "../images/company-carousel/company1.png";

import Person1 from "../images/alumni-logos/Person1.png";
import Person2 from "../images/alumni-logos/Person2.png";
import Person3 from "../images/alumni-logos/Person3.png";

const textAndImage = [
  {
    brand: SAP,
    alumni: Person1,
    bgColor: "#EBFDFC",
  },
  {
    brand: Microsoft,
    alumni: Person2,
    bgColor: "#CCF9F6",
  },
  { brand: Accenture, alumni: Person3, bgColor: "#ACDFDC" },
];

const AlumniSection = () => (
  <div className="container mt-5">
    <div className="row">
      {textAndImage.map(({ brand, alumni, bgColor }) => (
        <div style={{ backgroundColor: bgColor }} className="col-sm ">
          <div className="justify-content-start">
            <img src={brand} alt="brand" />
          </div>
          <div className="justify-content-center">
            <img src={alumni} alt="alumni" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default AlumniSection;
