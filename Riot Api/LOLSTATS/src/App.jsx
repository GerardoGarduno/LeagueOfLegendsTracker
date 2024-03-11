// import './App.css'
import React, { useState, useEffect} from 'react';

import NavBar from './components/NavBar';
import SearchField from './components/SearchField';
import Body from './components/Body';

function App() {
  // passing in props... make game list in the parent funtion to pass to children(components)
  const [gameList, setGameList] = useState([]);

 //Only run when gameListChanges
 useEffect(() => {
  console.log({ gameList });
}, [gameList]); //You see the console log twice – once during the initial render and once after the state update triggers a re-render.

  return (
    <div>
      <NavBar />
      <SearchField setGameList={setGameList}/> 
      <Body gameList={gameList}/>
      
    </div>
  )
}

export default App
