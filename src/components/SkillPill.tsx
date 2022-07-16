interface SkillProps {
  title: string;
  color?: string;
}

const SkillPill = ({ title, color }: SkillProps) => {
  return (
    <span
      className="badge badge-pill me-2 fw-normal"
      style={{ backgroundColor: "#FEFFBE", color: "black" }}
    >
      {title}
    </span>
  );
};

export default SkillPill;
