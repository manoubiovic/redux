import React from "react";
import Button from "@mui/material/Button";
function ButtonDisplay({ children, variant = "primary", type, size }) {
  return (
    <Button
      size={size}
      type={type}
      className={
        variant === "primary"
          ? "button button--primary"
          : "button button--secondary"
      }
    >
      {children}
    </Button>
  );
}
function SelectButton({ children, ...rest }) {
  return (
    <select className="select" {...rest}>
      {children}
    </select>
  );
}
export { SelectButton };
export default ButtonDisplay;
