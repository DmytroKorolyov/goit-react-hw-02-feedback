import React from "react";

const SectionTitle = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};
export default SectionTitle;