import React from 'react';

function Body({ gameList }) {
  return (
    <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12 h-screen">
      <div className='sm:col-span-10 bg-neutral-400 rounded-lg p-4'>
        <h2 className="text-lg font-bold mb-2 text-center">Game List</h2>
        {gameList.length !== 0 ?
          <div className='w-full'>
            {gameList.map((gameData, index) =>
              <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Game {index + 1}</h2>
                <div className= " flex gap-2 text-lg font-semibold mb-2">
                    Team 1: {gameData.info.teams[0].win ? <h3 className='text-green-600 '>Won</h3>: <p className='text-red-600'>Lost</p>}
                </div>
                  {gameData.info.participants.slice(0, 5).map((data, participantIndex)=>
                    <div key={participantIndex} className= "flex items-cente bg-blue-200 rounded-lg p-2 mb-2">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${data.championName}.png`}
                        alt={`Champion ${data.championName}`}
                        className="w-10 h-10 mr-2"
                      />
                       <div>
                        <span className="font-semibold">Player {participantIndex + 1}: </span>
                        {console.log(data.summonerName)}
                        <span className="mr-2">{data.summonerName}, Champion: {data.championName}, KDA: <span className='text-green-900'>{data.kills}</span> / <span className="text-red-600">{data.deaths}</span> / {data.assists}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2 text-lg font-semibold mb-2">
                      Team 2: {gameData.info.teams[1].win ? <h3 className='text-green-600 '>Won</h3>: <p className='text-red-600'>Lost</p>}
                  </div>                  
                  {gameData.info.participants.slice(5, 10).map((data, participantIndex)=>
                    <div key={participantIndex} className= "flex items-cente bg-red-200 rounded-lg p-2 mb-2">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${data.championName}.png`}
                        alt={`Champion ${data.championName}`}
                        className="w-10 h-10 mr-2"
                      />
                       <div>
                        <span className="font-semibold">Player {participantIndex + 1}: </span>
                        <span className="mr-2">{data.summonerName}, Champion: {data.championName}, KDA: <span className='text-green-900'>{data.kills}</span> / <span className="text-red-600">{data.deaths}</span> / {data.assists}</span>
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div> :
          <h1 className="text-xl">We have no data on that player</h1>
        }
      </div>
      <div className='sm:col-span-2 bg-neutral-500 rounded-lg'>
        Here we will show the champions they most use
      </div>
    </div>
  );
}

export default Body;
