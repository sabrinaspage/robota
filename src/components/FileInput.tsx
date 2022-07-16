import { useState } from "react";

interface FileInputProps {
  label: string;
  id: string;
  onChange?: (event: any) => void;
}

const FileInput = ({ label, id, onChange }: FileInputProps) => {
  return (
    <section className="w-100 p-4 d-flex justify-content-center pb-4">
      <div style={{ width: "22rem" }}>
        <label className="form-label">{label}</label>
        <input type="file" className="form-control" id={id} autoComplete="" onChange = {onChange}/>
      </div>
    </section>
  );
};

export default FileInput;
