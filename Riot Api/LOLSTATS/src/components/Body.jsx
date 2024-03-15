import React from 'react';

function Body({ gameList }) {
  return (
    <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12 h-screen">
      <div className='sm:col-span-10 bg-neutral-400 rounded-lg p-4 '>
        <h2 className="text-lg font-bold mb-2 text-center">Game List</h2>
        {gameList.length !== 0 ?
          <div className='w-full'>
            {gameList.map((gameData, index) =>
              <div key={index} className="mb-4">
                <h2 className=" flex gap-2 text-lg font-semibold mb-2">{gameData.info.queueId == 420  ? <h2>Ranked Game </h2>: <h2>Normal Game</h2>}</h2>
                <div className= " flex gap-2 text-lg font-semibold mb-2">
                    Team 1: {gameData.info.teams[0].win ? <h3 className='text-green-600 '>Won</h3>: <p className='text-red-600'>Lost</p>}
                </div>
                  {gameData.info.participants.slice(0, 5).map((data, participantIndex)=>
                    <div key={participantIndex} className= "flex items-center bg-blue-200 rounded-lg p-2 mb-2">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${data.championName}.png`}
                        alt={`Champion ${data.championName}`}
                        className="size-20 mr-2"
                      />
                       <div>
                        <span className="font-semibold">Player {participantIndex + 1}: </span>
                        {console.log(data.summonerName)}
                        <span className="mr-2">{data.summonerName}, Champion: {data.championName}, KDA: <span className='text-green-900'>{data.kills}</span> / <span className="text-red-600">{data.deaths}</span> / {data.assists}</span>
                        <div className="flex flex-row gap-2">
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item1}.png`}
                            alt={`Item 1 ${data.item1}`}
                            className="w-10 h-10 mr-2" 

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item2}.png`}
                            alt={`Item 2 ${data.item2}`}
                            className="w-10 h-10 mr-2"                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item3}.png`}
                            alt={`Item 3 ${data.item3}`}
                            className="w-10 h-10 mr-2"                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item4}.png`}
                            alt={`Item 4 ${data.item4}`}
                            className="w-10 h-10 mr-2"  
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item5}.png`}
                            alt={`Item 5 ${data.item5}`}
                            className="w-10 h-10 mr-2"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item6}.png`}
                            alt={`Item 6 ${data.item6}`}
                            className="w-10 h-10 mr-2"                        
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2 text-lg font-semibold mb-2">
                      Team 2: {gameData.info.teams[1].win ? <h3 className='text-green-600 '>Won</h3>: <p className='text-red-600'>Lost</p>}
                  </div>                  
                  {gameData.info.participants.slice(5, 10).map((data, participantIndex)=>
                    <div key={participantIndex} className= "flex items-center bg-red-200 rounded-lg p-2 mb-2">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${data.championName}.png`}
                        alt={`Champion ${data.championName}`}
                        className="size-20 mr-2"
                      />
                       <div>
                        <span className="font-semibold">Player {participantIndex + 1}: </span>
                        <span className="mr-2">Level:,{data.summonerLevel},{data.summonerName}, Champion: {data.championName}, KDA: <span className='text-green-900'>{data.kills}</span> / <span className="text-red-600">{data.deaths}</span> / {data.assists}</span>
                        <div className="flex flex-row gap-2">
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item1}.png`}
                            alt={`Item 1 ${data.item1}`}
                            className="w-10 h-10 mr-2" 

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item2}.png`}
                            alt={`Item 2 ${data.item2}`}
                            className="w-10 h-10 mr-2"                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item3}.png`}
                            alt={`Item 3 ${data.item3}`}
                            className="w-10 h-10 mr-2"                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item4}.png`}
                            alt={`Item 4 ${data.item4}`}
                            className="w-10 h-10 mr-2"  
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item5}.png`}
                            alt={`Item 5 ${data.item5}`}
                            className="w-10 h-10 mr-2"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                        
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item6}.png`}
                            alt={`Item 6 ${data.item6}`}
                            className="w-10 h-10 mr-2"                        
                          />
                        </div>                      
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div> :
            <h1 className="flex items-center justify-center h-full">We have no data on that player</h1>
        }
      </div>
      <aside  className='sm:col-span-2 bg-neutral-500 rounded-lg sticky top-0 right-0'>
        Here we will show the champions they most use
      </aside>
    </div>
  );
}

export default Body;
