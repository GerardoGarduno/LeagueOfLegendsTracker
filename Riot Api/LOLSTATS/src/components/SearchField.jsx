import React, { useState, useEffect} from 'react';
import axios from 'axios';

function SearchField({ setGameList, setPlayerInfo, setPlayerChamps }) {
  const [summonersName, setSummonersName] = useState('');
  // const[gameList, setGameList] = useState([]);

  function getPlayerGames(e){
    axios.get("http://localhost:3001/past5games", {params: {username: summonersName}})
      .then(function(response){
        // setGameList(response.data) Only fetching games
        const { gameData, championData, playerInfo } = response.data;
        if (gameData.length === 0 || !playerInfo || !championData) {
          // Handle the case where no data is returned
          console.log("No data found");
          // You can display an error message, reset the states, or handle it as per your requirement
        } else {
        // Update states with fetched data
        setGameList(gameData);
        setPlayerInfo(playerInfo);
        setPlayerChamps(championData);
        }
      }).catch(function(error){
        console.log("This is an error: ",error)
      })
  };
 
  return (
      <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12">
          <div className='sm:col-span-10'>
            <input
                type="text"
                className="w-full rounded-l-lg  p-3"
                placeholder="Enter a League of Legend's Username"
                value={summonersName}
                onChange={event => {
                  setSummonersName(event.target.value);
                }}
            />
          </div>
          <div className='sm:col-span-2'>  
            <button onClick ={getPlayerGames} className=" w-full p-3 rounded-r-lg bg-red-900 hover:bg-red-700 text-white font-bold">
                Show Stats
            </button>
          </div>
      </div>
  );
}

export default SearchField;
