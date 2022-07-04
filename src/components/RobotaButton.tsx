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
}

const RobotaButton = ({
  title,
  type,
  urlPath,
  marginWidth,
}: SmallButtonProps) => {
  if (type == ButtonTypes.OUTLINE_LARGE) {
    return (
      <button
        role="button"
        type="button"
        className={`btn btn-outline-primary btn-border-radius-sm btn-box-shadow ${marginWidth} fw-bold`}
        onClick={() => urlPath}
      >
        {title}
      </button>
    );
  }
  if (type == ButtonTypes.CONTAINED_LARGE) {
    return (
      <a
        role="button"
        type="button"
        className={`btn btn-primary btn-border-radius-sm btn-box-shadow ${marginWidth} text-white fw-bold`}
        href={urlPath}
      >
        {title}
      </a>
    );
  }
  if (type == ButtonTypes.OUTLINE_SMALL) {
    return <a href={urlPath}> {title} </a>;
  }
  if (type == ButtonTypes.CONTAINED_SMALL) {
    return <a href={urlPath}> {title} </a>;
  }
  return <a></a>;
};

export default RobotaButton;
