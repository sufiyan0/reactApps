import { useState } from "react";

let nextId = 0;
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

// interface name {
//   id: number;
//   name: string;
// }
export default function StateArrayUpdate() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            setArtists(
              // Replace the state
              [
                // with a new array
                { id: nextId++, name: name }, // and one new item at the end
                ...artists, // that contains all the old items
              ]
            );
          }}
        >
          Add
        </button>
      </form>
      
       <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button className="button" onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>


        <br  className="bg-black"/>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}> {artist.id} :: {artist.name}</li>

        ))}
      </ul>



    </>
  );
}
