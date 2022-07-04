enum ButtonTypes {
  LARGE,
  SMALL,
  BLANK,
}

interface SmallButtonProps {
  title: string;
  type: ButtonTypes;
}

const RobotaButton = ({ title, type }: SmallButtonProps) => {
  if (type == ButtonTypes.LARGE) {
    return <button> {title} </button>;
  }
  if (type == ButtonTypes.SMALL) {
    return <button> {title} </button>;
  }
  if (type == ButtonTypes.BLANK) {
    return <button> {title} </button>;
  }
  return;
};

export default RobotaButton;
