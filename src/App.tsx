import Markdown from "react-markdown";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch("/preview.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <>
      <div className="flex gap-2 w-full p-4 h-screen">
        <div className="w-1/2 mx-6">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-full p-4 rounded-md shadow-2xl shadow-indigo-500/40"
          ></textarea>
        </div>
        <div className="w-1/2 p-2 prose overflow-scroll">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </>
  );
}

export default App;
