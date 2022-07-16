interface TextAreaProps {
  label: string;
  placeholder: string;
  id: string;
  subtitle?: string;
  value?: string;
  changeHandler?: (event: any) => void;
}

const TextArea = ({
  label,
  placeholder,
  id,
  subtitle,
  value = "",
  changeHandler,
}: TextAreaProps) => (
  <div className="form-group" style={{ minWidth: "100%" }}>
    <label>{label}</label>
    <textarea
      className="form-control"
      id={id}
      aria-describedby="emailHelp"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
    {subtitle && (
      <small id="emailHelp" className="form-text text-muted">
        {subtitle}
      </small>
    )}
  </div>
);

export default TextArea;
