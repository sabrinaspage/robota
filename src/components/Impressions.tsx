import LookingAtCharts from "../images/candidate-logos/looking-at-chart.png";
import HoldingHands from "../images/candidate-logos/shaking-hands.png";
import WritingOnPaper from "../images/candidate-logos/writing-on-paper.png";

const leadingProvider = [
  {
    title: "4th",
    subtitle: "in the world for number of people with higher education",
  },
  {
    title: "100%",
    subtitle: "literacy rate among the youngest generations",
  },
  {
    title: "Top",
    subtitle: "producer of offshore IT talent globally",
  },
  {
    title: "50,000",
    subtitle: "strong Ukranian tech community",
  },
];

const Impressions = () => (
  <div className="container mt-5">
    <div className="row">
      {leadingProvider.map(({ title, subtitle }) => (
        <div className="col-sm m-4 px-5 py-1">
          <h1 className="display-7 fw-bold">{title}</h1>
          <h5 className="display-7 fw-bold">{subtitle}</h5>
        </div>
      ))}
    </div>
  </div>
);
export default Impressions;
