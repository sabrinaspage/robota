import React from "react";

interface Props {
  pdfURL: string;
}
const Pdf: React.FC<Props> = ({ ...props }) => {
  const { pdfURL } = props;
  return (
    <object
      width="100%"
      height="100%"
      aria-label="my resume"
      style={{ padding: "0px 50px" }}
      data={pdfURL}
      type="application/pdf"
    ></object>
  );
};

export default Pdf;
