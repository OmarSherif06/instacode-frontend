import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [slower, setSlower] = useState(false);

  const handleGenerate = async () => {
    if (input === "")
      return;

    try {
      const response = await fetch("https://omarsherif06.pythonanywhere.com/generate", {
        method: "POST",
        body: input,
      });
      
      if (!response.ok) 
        throw new Error(`Error: ${response.statusText}`);

      let resultText = await response.text();

      if (resultText.includes("[SLOWER RESPONSES]")) {
        setSlower(true);
        resultText = resultText.replace("[SLOWER RESPONSES]", "");
      } else {
        setSlower(false);
      }
      
      setOutput(resultText);
    } catch (error) {
      console.error("Failed to generate:", error);
      setOutput("Error generating code.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
  };

  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div id="container">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your question"></textarea>
      <button id="generate-btn" onClick={async () => {
        setIsGenerating(true);
        document.getElementById("generate-btn").disabled = true;
        await handleGenerate();
        setIsGenerating(false);
        document.getElementById("generate-btn").disabled = false;
      }}>
        {isGenerating ? "Generating..." : "Generate"}
      </button>
      
      <div id="code-output" style={{ visibility: output === "" ? "hidden" : "visible", border: slower ? "2px solid red" : "none" }}>
        <pre>{output}</pre>
        <button id="copy-btn" onClick={handleCopy}>Copy</button>
      </div>
      {slower === true && <p style={{ color: "red", fontSize: "20px"}}>Note: The response might be slower than usual.</p>}
    </div>
  );
}

export default App;