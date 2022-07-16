import RobotaButton, { ButtonTypes } from "./RobotaButton";

interface JobsCardProps {
  title: string;
  description: string;
  company?: string;
  location: string;
  skills: string;
  link?: string;
  cardActionTitle?: string;
  handleClick?: (e: any) => void;
}

const JobCard = ({
  title,
  description,
  location,
  company,
  skills,
  link,
  cardActionTitle,
  handleClick,
}: JobsCardProps) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {company && (
          <h3 className="card-title">
            Company: <span style={{ color: "#206DE0" }}>{company}</span>
          </h3>
        )}
        <p className="card-text">
          <b>Description:</b> {description}
        </p>
        <p className="card-text">
          <b>Location:</b> {location}
        </p>
        <p className="card-text">
          <b>Skills:</b> {skills}
        </p>
        <p className="card-text">
          <b>Link:</b> {link}
        </p>
        {handleClick && cardActionTitle && (
          <RobotaButton
            title={cardActionTitle}
            type={ButtonTypes.CONTAINED_LARGE}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default JobCard;
