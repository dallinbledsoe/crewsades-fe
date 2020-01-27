import React from "react";

export default function(props) {
  return (
    <div>
      <h2>Shirt Detail for {props.match.params.slug}</h2>
    </div>
  );
}
