import React,{ useState } from "react";
import { isElement } from "react-dom/test-utils";

const Player = ({name, symbol, isActive, onNameChange }) => {
    const [playername,setPlayerName] = useState(name);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
      setEdit((editing) => !editing);
      if(edit){

        onNameChange(symbol,playername)
      }
    }

    const handelChange = (event) => {
      setPlayerName(event.target.value);
    }
  return (
    
      <li className={isActive ? 'active' : undefined}>
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
