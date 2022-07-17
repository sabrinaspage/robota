interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type: string;
  subtitle?: string;
  value?: string | number;
  changeHandler?: (event: any) => void;
}

const Input = ({
  label,
  placeholder,
  id,
  type,
  subtitle,
  value = "",
  changeHandler,
}: InputProps) => (
  <div className="form-group" style={{ minWidth: "100%" }}>
    <label>{label}</label>
    <input
      type={type}
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

export default Input;
