import React from "react";

const DemoComponent = ({ list = [] }) => (
  <ul>
    {list.map((element) => (
      <li key={`${element}-item`}>{element}</li>
    ))}
  </ul>
);

const MainApp = (props) => {
  return (
    <main>
      <h1>{props.title}</h1>
      <DemoComponent list={["John", "Bob", "Jesus", "Travis"]} />
    </main>
  );
};

export { DemoComponent };

export default MainApp;
