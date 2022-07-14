import RobotaButton, { ButtonTypes } from "./RobotaButton";

interface JobsCardProps {
  title: string;
  description: string;
  location: string;
  skills: string;
  link?: string;
  handleClick?: (e: any) => void;
}

const JobCard = ({
  title,
  description,
  location,
  skills,
  link,
  handleClick,
}: JobsCardProps) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
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
        {handleClick && (
          <RobotaButton
            title="Remove this Listing"
            urlPath="#"
            type={ButtonTypes.CONTAINED_LARGE}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default JobCard;
