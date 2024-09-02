import React from "react";

import { useContext, useState } from "react";

import { DarkContext } from "../contexts/DarkContext";

const CodeBlock = ({ code, lang = "javascript" }) => {
  const { theme } = useContext(DarkContext);

  return (
    <pre
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#181818",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}
    >
      <code style={{ fontSize: "1.5rem", fontWeight: 800 }}>{code}</code>
    </pre>

    // test
  );
};

export default CodeBlock;
