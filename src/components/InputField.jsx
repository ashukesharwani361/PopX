import "./InputField.css";

export default function InputField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}