import { useState } from "react";

function App() {
  let [color, setcolor] = useState("blue");
  return (
    <div
      className="w-full h-screen flex duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
            onClick={() => setcolor("red")}
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
            onClick={() => setcolor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button
            className="outline-none px-4 py-4 rounded-full text-white shadow-lg  "
            onClick={() => setcolor("green")}
            style={{ backgroundColor:"green" }}
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
