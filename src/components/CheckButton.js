import React from "react";

function CheckButton({ checked, handleCheck }) {
  return (
    <div className="svgBox" onClick={handleCheck}>
      <svg
        style={
          checked
            ? {
                width: "100%",
                height: "100%",
                stroke: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {
                width: "100%",
                height: "100%",
                stroke: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
}

export default CheckButton;
