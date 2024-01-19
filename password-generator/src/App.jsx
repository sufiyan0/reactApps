import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  //useref hook
  const passRef = useRef(null);

  const copypassword = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  // password generator function with useCallback 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (symbols) str += "!@#$%^&*_-+";


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, symbols, setPassword]);


  // password generator function without useCallback
  // const passwordGenerator = () => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numbers) str += "0123456789";
  //   if (symbols) str += "!@#$%^&*_-+";


  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(char);
  //   }

  //   setPassword(pass);
  // };

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbols, passwordGenerator]);

  return (
    <>
      <div className="h-screen flex flex-col bg-black items-center justify-center ">
        <div className="flex flex-col justify-center items-center bg-slate-700 p-4 m-6 w-3/4 ">
          <h1 className="text-white text-3xl font-bold m-4">Password Generator</h1>
          <div className="flex m-4">
            <input
              type="text"
              value={password}
              className="text-black text-3xl rounded-s-sm font-bold p-2 my-2"
              ref={passRef}
            />
            <button onClick={copypassword} className="text-black cursor-pointer rounded-e-sm text-3xl font-bold  p-2 my-2 bg-blue-800">
              Copy
            </button>
          </div>

          <div className="">

            <label className="text-white mx-3 ">Password Length {length}</label>
            <input
              className="align-middle  justify-center rounded-sm font-bold p-2 my-2"
              type="range"
              value={length}
              min={8}
              max={25}
              onChange={(e) => setLength(e.target.value)}
            />

            <label className="text-white mx-3 ">Number</label>
            <input
             type="checkbox"
             className="align-middle"
             onClick={(e) => setNumbers((prev) => !prev)}
            
            />
            <label className="text-white mx-3 ">symbols</label>
            <input
             type="checkbox"
             className="align-middle"
             onClick={(e) => setSymbols((prev) => !prev)}
            
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
