import { useState } from "react";

interface SelectProps {
  defaultText: string;
  setSelectedText: (e?: any) => void;
}

const Select = ({ defaultText, setSelectedText }: SelectProps) => {
  return (
    <select
      className="form-select"
      onChange={(e) => setSelectedText(e.target.value)}
    >
      <option value="0">I want to find talent</option>
      <option value="1">I want to start my life anew</option>
    </select>
  );
};

export default Select;
