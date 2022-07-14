export enum ButtonTypes {
  OUTLINE_SMALL,
  CONTAINED_SMALL,
  OUTLINE_LARGE,
  CONTAINED_LARGE,
}

interface SmallButtonProps {
  title: string;
  type: ButtonTypes;
  urlPath: string;
  marginWidth?: string;
  onClick?: any;
}

const RobotaButton = ({
  title,
  type,
  //urlPath,
  marginWidth,
  onClick,
}: SmallButtonProps) => {
  if (type == ButtonTypes.OUTLINE_LARGE) {
    return (
      <button
        role="button"
        type="button"
        className={`btn btn-outline-primary btn-border-radius-sm btn-box-shadow ${marginWidth} fw-bold`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
  if (type == ButtonTypes.CONTAINED_LARGE) {
    return (
      <button
        role="button"
        type="button"
        className={`btn btn-primary btn-border-radius-sm btn-box-shadow ${marginWidth} text-white fw-bold`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
  if (type == ButtonTypes.OUTLINE_SMALL) {
    return <button> {title} </button>;
  }
  if (type == ButtonTypes.CONTAINED_SMALL) {
    return <button> {title} </button>;
  }
  return <button></button>;
};

export default RobotaButton;
