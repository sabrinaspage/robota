import LookingAtCharts from "../images/candidate-logos/looking-at-chart.png";
import HoldingHands from "../images/candidate-logos/shaking-hands.png";
import WritingOnPaper from "../images/candidate-logos/writing-on-paper.png";

const textAndImage = [
  { text: "We vet candidates & companies", url: LookingAtCharts },
  { text: "We train & prepare candidates", url: WritingOnPaper },
  { text: "Companies hire candidates", url: HoldingHands },
];

const CandidatesSection = () => (
  <div className="container mt-5">
    <div className="row">
      {textAndImage.map(({ text, url }) => (
        <div
          style={{ backgroundColor: "#EBFDFC" }}
          className="col-sm m-4 rounded-5 px-5 py-1"
        >
          <h3 className="display-7">{text}</h3>
          <div className="d-flex justify-content-center">
            <img src={url} alt="looking at chart" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default CandidatesSection;
