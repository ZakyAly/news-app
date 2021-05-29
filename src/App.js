import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { alanKey } from "./constants";

const apiKey = alanKey;

const App = () => {
  useEffect(() => {
    alanBtn({
      key: apiKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("this code is working");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>NEWS APP</h1>
    </div>
  );
};

export default App;
