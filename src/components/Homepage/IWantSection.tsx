import GoIcon from "../../images/go.png";

const wants = [
  {
    who: "Companies",
    what: "I want to hire",
    bgColor: "#F8FD14",
    textColor: "black",
    about: "Get access to vetted individuals seeking on-sire or remote jobs",
    go: "#",
  },
  {
    who: "Clients",
    what: "I want to apply",
    bgColor: "#0F66CD",
    textColor: "white",
    about: "Figure out how Robota can help you land a job",
    go: "#",
  },
];

const IWantSection = () => (
  <div className="container mt-4">
    <div className="row">
      {wants.map(({ who, what, bgColor, textColor, about, go }) => (
        <div
          style={{ backgroundColor: bgColor }}
          className={`col-sm m-4 px-5 py-1 rounded-5 text-${textColor} text-center`}
        >
          <div
            className="d-flex justify-content-center flex-column mb-1 "
            style={{ height: "250px" }}
          >
            <h3 className="mt-3 display-7 fw-light text-uppercase">{who}</h3>
            <h1 className="display-7 mt-1 fw-bold">{what}</h1>
            <h3 className="mt-3 fw-light display-7 flex-grow-1">{about}</h3>
            <a href={go} className="mt-auto">
              <img className="mt-auto" src={GoIcon} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default IWantSection;
