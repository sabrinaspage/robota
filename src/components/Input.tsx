interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type: string;
  subtitle?: string;
}

const Input = ({ label, placeholder, id, type, subtitle }: InputProps) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      aria-describedby="emailHelp"
      placeholder={placeholder}
    />
    {subtitle && (
      <small id="emailHelp" className="form-text text-muted">
        subtitle
      </small>
    )}
  </div>
);

export default Input;
