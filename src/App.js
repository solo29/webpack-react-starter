import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const isProduction = () => process.env.NODE_ENV === "production";

const App = () => {
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);
  return (
    <div>
      {isProduction() ? <h1>Running in Production </h1> : <h1>Running in Development </h1>}
      <Counter />
    </div>
  );
};

export default App;
