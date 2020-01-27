import React from "react";

export default function(props) {
  return (
    <div>
      <h2>Product Detail for {props.match.params.slug}</h2>
    </div>
  );
}
