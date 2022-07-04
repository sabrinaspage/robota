import { useState } from "react";

interface SelectProps {
  defaultText: string;
  setSelectedText: (e?: any) => void;
}

const Select = ({ defaultText, setSelectedText }: SelectProps) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onClick={(e) => setSelectedText(e.currentTarget)}
    >
      <option defaultValue={defaultText}>I want to find talent</option>
      <option value="1">I want to help beginners</option>
      <option value="2">I want to provide opportunities</option>
    </select>
  );
};

export default Select;
