"use client";

import { useState } from "react";
import styles from "./formatter.module.css";

export default function FormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = () => {
    try {
      const jsonObject = JSON.parse(input);
      const formattedJson = JSON.stringify(jsonObject, null, 4);
      setOutput(formattedJson);
      setError("");
    } catch (err) {
      setOutput("");
      if (err instanceof Error) {
        setError("Invalid JSON: " + err.message);
      } else {
        setError("Invalid JSON: ");
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(
      () => alert("Formatted JSON copied to clipboard!"),
      () => alert("Failed to copy JSON.")
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JSON Formatter</h1>

      <textarea
        className={styles.textarea}
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className={styles.button} onClick={formatJson}>
        Format JSON
      </button>

      <button className={styles.copyButton} onClick={copyToClipboard}>
        Copy to Clipboard
      </button>

      {error && <p className={styles.error}>{error}</p>}

      <textarea
        className={styles.output}
        placeholder="Formatted JSON will appear here..."
        value={output}
        readOnly
      />
    </div>
  );
}
