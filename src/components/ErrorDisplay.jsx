import React from "react";
import "../App.css";

const ErrorDisplay = ({ error }) => {
  return <div className="errorMain">Error: {error.message}</div>;
};

export default ErrorDisplay;
