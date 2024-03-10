import React, { useState } from 'react';
import { useEffect } from 'react';

function Body() {
  const[gameList, setGameList] = useState([]);
  function getPlayerGames(event){
    axios.get("http://localhost:3001/past5games")
      .then(function(response){
        setGameList(response.data)
      }).catch(function(error){
        console.log(error)
      })
  };

  return (
      <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12 h-screen">
          <div className='sm:col-span-10 bg-neutral-400 rounded-lg'>
            {gameList}
            <ul>
                <li>Game 1</li>
                <li>Game 1</li>
                <li>Game 1</li>
                <li>Game 1</li>
                <li>Game 1</li>
                <li>Game 1</li>
            </ul>
          </div>
          <div className='sm:col-span-2 bg-green-300 rounded-lg'>  
                Here we will show the champions they most use 
          </div>
      </div>
  );
}
export default Body;
