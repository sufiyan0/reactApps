import { useState } from "react";

function App() {
  const [coler, setColor] = useState("black");

  return (
    <>
      <div
        className="flex flex-col  min-h-screen"
        style={{ backgroundColor: coler }}
      >
        <div className="bg-gray-500  items-center  absolute rounded-2xl bottom-10 flex flex-wrap justify-center m-5 ">
          <button
            className="bg-yellow-300 p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("yellow")}
          >
            yello
          </button>
          <button
            className="bg-green-500 p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-red-500 p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-blue-500 p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-orange-500 p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="bg-white p-2 m-4 rounded-md text-2xl font-semibold"
            onClick={() => setColor("white")}
          >
            white
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
