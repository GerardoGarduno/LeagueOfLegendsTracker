import React, { useState } from 'react';
import { useEffect } from 'react';

function Body({gameList}) {

  return (
      <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12 h-screen">
          <div className='sm:col-span-10 bg-neutral-400 rounded-lg'>
            <h2>Game List</h2>
              <ul>
                {gameList.map((game, index) => (
                  <li key={index}>
                    <div>
                      <h3>Metadata:</h3>
                      <p>{JSON.stringify(game.metadata)}</p>
                    </div>
                    <div>
                      <h3>Info:</h3>
                      <p>{JSON.stringify(game.info)}</p>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          <div className='sm:col-span-2 bg-neutral-500 rounded-lg'>  
                Here we will show the champions they most use 
          </div>
      </div>
  );
}
export default Body;
