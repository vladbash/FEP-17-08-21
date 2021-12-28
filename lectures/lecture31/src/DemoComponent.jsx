import React from "react";

const DemoComponent = ({ list = [] }) => (
  <ul>
    {list.map((element) => (
      <li key={`${element}-item`}>{element}</li>
    ))}
  </ul>
);

export default DemoComponent;
