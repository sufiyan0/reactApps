import { useState } from "react";

// Without Batching 

// export default function UpdaterFunction() {
    //   const [number, setNumber] = useState(0);
    
    //   return (
        //     <>
        //       <h1>{number}</h1>
        //       <button
        //         className="button"
        //         onClick={() => {
            //           setNumber( number + 1);
            //           setNumber( number + 1);
//           setNumber( number + 1);
//         }}
//       >
//         +3
//       </button>
//     </>
//   );
// }

//   batching & UpdaterFunctpion

export default function UpdaterFunction() {


  const [number, setNumber] = useState(0);

  return (
    <>
      <h1 >{number}</h1>
      <button className='button' onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
