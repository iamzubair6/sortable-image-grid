import React, { forwardRef } from "react";

const Photo = forwardRef(({ url, index, faded, style, ...props }, ref) => {
  const inlineStyles = {
    opacity: faded ? "0.2" : "1",
    transformOrigin: "0 0",
    height: "100%",
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5px",
    backgroundColor: "white",
    border: "1px solid lightgray",
    ...style,
  };

  return (
    <div className="hover-img" ref={ref} style={inlineStyles} {...props} />
  );
});

export default Photo;
