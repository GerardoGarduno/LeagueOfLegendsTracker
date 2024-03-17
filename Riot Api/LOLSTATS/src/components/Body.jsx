import React from 'react';

function Body({ gameList, playerInfo, playerChamps }) {
  const championDictionary = {
    266: 'Aatrox',
    103: 'Ahri',
    84: 'Akali',
    166: 'Akshan',
    12: 'Alistar',
    32: 'Amumu',
    34: 'Anivia',
    1: 'Annie',
    523: 'Aphelios',
    22: 'Ashe',
    136: 'AurelionSol',
    268: 'Azir',
    432: 'Bard',
    200: "BelVeth",
    53: 'Blitzcrank',
    63: 'Brand',
    201: 'Braum',
    233: 'Briar',
    51: 'Caitlyn',
    164: 'Camille',
    69: 'Cassiopeia',
    31: "Cho'Gath",
    42: 'Corki',
    122: 'Darius',
    131: 'Diana',
    119: 'Draven',
    36: 'DrMundo',
    245: 'Ekko',
    60: 'Elise',
    28: 'Evelynn',
    81: 'Ezreal',
    9: 'Fiddlesticks',
    114: 'Fiora',
    105: 'Fizz',
    3: 'Galio',
    41: 'Gangplank',
    86: 'Garen',
    150: 'Gnar',
    79: 'Gragas',
    104: 'Graves',
    887: 'Gwen',
    120: 'Hecarim',
    74: 'Heimerdinger',
    910: 'Hwei',
    420: 'Illaoi',
    39: 'Irelia',
    427: 'Ivern',
    40: 'Janna',
    59: 'JarvanIV',
    24: 'Jax',
    126: 'Jayce',
    202: 'Jhin',
    222: 'Jinx',
    145: "Kaisa",
    429: 'Kalista',
    43: 'Karma',
    30: 'Karthus',
    38: 'Kassadin',
    55: 'Katarina',
    10: 'Kayle',
    141: 'Kayn',
    85: 'Kennen',
    121: "Khazix",
    203: 'Kindred',
    240: 'Kled',
    96: "Kog'Maw",
    897: 'KSante',
    7: 'Leblanc',
    64: 'LeeSin',
    89: 'Leona',
    876: 'Lillia',
    127: 'Lissandra',
    236: 'Lucian',
    117: 'Lulu',
    99: 'Lux',
    54: 'Malphite',
    90: 'Malzahar',
    57: 'Maokai',
    11: 'MasterYi',
    902: 'Milio',
    21: 'MissFortune',
    62: 'Wokong',
    82: 'Mordekaiser',
    25: 'Morgana',
    950: 'Naafiri',
    267: 'Nami',
    75: 'Nasus',
    111: 'Nautilus',
    518: 'Neeko',
    76: 'Nidalee',
    895: 'Nilah',
    56: 'Nocturne',
    20: 'Nunu&Willump',
    2: 'Olaf',
    61: 'Orianna',
    516: 'Ornn',
    80: 'Pantheon',
    78: 'Poppy',
    555: 'Pyke',
    246: 'Qiyana',
    133: 'Quinn',
    497: 'Rakan',
    33: 'Rammus',
    421: "RekSai",
    526: 'Rell',
    888: 'RenataGlasc',
    58: 'Renekton',
    107: 'Rengar',
    92: 'Riven',
    68: 'Rumble',
    13: 'Ryze',
    360: 'Samira',
    113: 'Sejuani',
    235: 'Senna',
    147: 'Seraphine',
    875: 'Sett',
    35: 'Shaco',
    98: 'Shen',
    102: 'Shyvana',
    27: 'Singed',
    14: 'Sion',
    15: 'Sivir',
    72: 'Skarner',
    901: 'Smolder',
    37: 'Sona',
    16: 'Soraka',
    50: 'Swain',
    517: 'Sylas',
    134: 'Syndra',
    223: 'TahmKench',
    163: 'Taliyah',
    91: 'Talon',
    44: 'Taric',
    17: 'Teemo',
    412: 'Thresh',
    18: 'Tristana',
    48: 'Trundle',
    23: 'Tryndamere',
    4: 'TwistedFate',
    29: 'Twitch',
    77: 'Udyr',
    6: 'Urgot',
    110: 'Varus',
    67: 'Vayne',
    45: 'Veigar',
    161: "Vel'Koz",
    711: 'Vex',
    254: 'Vi',
    234: 'Viego',
    112: 'Viktor',
    8: 'Vladimir',
    106: 'Volibear',
    19: 'Warwick',
    498: 'Xayah',
    101: 'Xerath',
    5: 'XinZhao',
    157: 'Yasuo',
    777: 'Yone',
    83: 'Yorick',
    350: 'Yuumi',
    154: 'Zac',
    238: 'Zed',
    221: 'Zeri',
    115: 'Ziggs',
    26: 'Zilean',
    142: 'Zoe',
    143: 'Zyra'
  };
  
  
  return (
    <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12 h-screen">
      <aside  className='sm:col-span-2 bg-neutral-500 rounded-lg sticky top-0 right-0'>
        {playerInfo ? (
          <div className="mt-3 h-fit">
            <h2 className="text-lg font-semibold mb-4 text-center">Player Info</h2>
            <div className="flex items-center justify-center flex-col">
            
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/${playerInfo[0].profileIconId}.png`}
              alt="Player Icon"
              className="w-20 h-20 rounded-full mb-2"
            />
              <div className="text-center">
                <p className="font-semibold">Player Name: {playerInfo[0].name}</p>
                <p>Player Level: {playerInfo[0].summonerLevel}</p>
                {/* Add other player ranking information here if available */}
              </div>
            </div>
          </div>
        ) : (
          <div>No Name Entered or No Data Found ....</div>
        )}
        {playerChamps ?
          <div className="mt-3 h-fit">
            <h2 className="text-lg font-semibold mb-4 text-center">Player Champions</h2>
              <ul>
                {playerChamps.map((champion, index) => (
                  <li key={index} className="bg-gray-100 rounded-lg p-4 mb-4">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championDictionary[champion.championId]}_0.jpg`}
                    />
                    <>{championDictionary[champion.championId]}</>
                    <div className="font-semibold">Champion ID: {champion.championId}</div>
                    <div>Champion Level: {champion.championLevel}</div>
                    <div>Champion Points: {champion.championPoints}</div>
                    <div>Last Play Time: {new Date(champion.lastPlayTime).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
          </div>
          :
          <div>
            No Name Entered or No Data Found ....
          </div>
        }
      </aside>    
      <div className='sm:col-span-10 bg-neutral-400 rounded-lg p-4 '>
        <h2 className="text-lg font-bold mb-2 text-center">Game List</h2>
        {gameList.length !== 0 ?
          <div className='w-full'>
            {gameList.map((gameData, index) =>
              <div key={index} className="mb-4">
                <div>
                    <h2 className="text-lg font-semibold mb-2">{gameData.info.queueId === 420 ? 'Ranked Game' : 'Normal Game'}</h2>
                    <div className="mb-2">
                        Start Date: {new Date(gameData.info.gameStartTimestamp).toLocaleDateString()} <br />
                        Start Time: <span className="font-bold">{new Date(gameData.info.gameStartTimestamp).toLocaleTimeString()}</span>
                    </div>
                    <div>
                        <div className="font-bold">
                            Total Time: {
                                (() => {
                                    const totalTimeMs = gameData.info.gameEndTimestamp - gameData.info.gameStartTimestamp;
                                    const totalMinutes = Math.floor((totalTimeMs % (1000 * 60 * 60)) / (1000 * 60));
                                    return `${totalMinutes} minutes`;
                                })()
                            }
                        </div>
                    </div>
                </div>
              
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
                        {/* {console.log(data.summonerName)} */}
                        <span className="mr-2">{data.summonerName}, Champion: {data.championName}, KDA: <span className='text-green-900'>{data.kills}</span> / <span className="text-red-600">{data.deaths}</span> / {data.assists}</span>
                        <div className="flex flex-row gap-2">
                        <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item0}.png`}
                            alt={`Item 0 ${data.item0}`}
                            className="w-10 h-10 mr-2" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item1}.png`}
                            alt={`Item 1 ${data.item1}`}
                            className="w-10 h-10 mr-2" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item2}.png`}
                            alt={`Item 2 ${data.item2}`}
                            className="w-10 h-10 mr-2"    
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
                                            
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item3}.png`}
                            alt={`Item 3 ${data.item3}`}
                            className="w-10 h-10 mr-2"    
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              

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
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
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
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item0}.png`}
                            alt={`Item 0 ${data.item0}`}
                            className="w-10 h-10 mr-2" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item1}.png`}
                            alt={`Item 1 ${data.item1}`}
                            className="w-10 h-10 mr-2" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              

                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item2}.png`}
                            alt={`Item 2 ${data.item2}`}
                            className="w-10 h-10 mr-2" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
                       
                          />
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/item/${data.item3}.png`}
                            alt={`Item 3 ${data.item3}`}
                            className="w-10 h-10 mr-2"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'}}                                              
                        
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

    </div>
  );
}

export default Body;
