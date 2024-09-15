import React,{ useState } from "react";

const Player = ({name, symbol}) => {
    const [playername,setPlayerName] = useState(name);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
      setEdit((editing) => !editing);
    }

    const handelChange = (event) => {
      setPlayerName(event.target.value);
    }
  return (
    
      <li>
        <span className="player">
        {
          edit ? <input type="text" value={playername} required onChange={handelChange}/> :
          <span className="player-name">{playername}</span>
        }
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
        </span>
      </li>
   
  );
};

export default Player;
