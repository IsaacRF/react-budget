import React from "react";

export interface ErrorProps {
  message: string;
}

/**
 * Component to represent error messages
 * @param message error message to show additional info
 * @returns p element with the error message
 */
const Error: React.FC<ErrorProps> = ({ message }) => (
  <p className="alert alert-danger error">Error detected: {message}</p>
);

export default Error;
