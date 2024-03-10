import React, { useState } from 'react';

function SearchField() {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Fetching stats for user: {username}`);
  };

  return (
      <div className="grid p-3.5 m-6 grid-cols-1 gap-2 sm:grid-cols-12">
          <div className='sm:col-span-10'>
            <input
                type="text"
                className="w-full rounded-l-lg p-3"
                placeholder="Enter LoL username"
                value={username}
                onChange={handleChange}
            />
          </div>
          <div className='sm:col-span-2'>  
            <button onClick ={handleSubmit} className=" w-full p-3 rounded-r-lg bg-red-900 hover:bg-red-700 text-white font-bold">
                Show Stats
            </button>
          </div>
      </div>
  );
}

export default SearchField;
