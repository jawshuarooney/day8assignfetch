import React, { useState } from 'react'
import './App.css'

function App() {
  const [userid, setuserid] = useState('');

  const [userdata, setuserdata] = useState(null)

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
      const data = await response.json();
      setuserdata(data);
    }

    catch (error) {
      console.error('Error fetching user data', error);
    }
  }


  return (
    <div className='container'>
      <center>
      <h1>Searched User data by id(1 to 10)</h1>
      <div>
        <input type='text' value={userid} onChange={(e) => setuserid(e.target.value)}/>
        <button onClick={fetchdata}>Search Id</button>
      </div>

      <div>
        {userdata && (
          <div>
            <h2>Worker ID: {userdata.id}</h2>
            <p>Name: {userdata.name}</p>
            <p>Username: {userdata.username}</p>
            <p>Email Address: {userdata.email}</p>
          </div>
          
        )
       
        }
        
      </div>
      </center>
    </div>
  )
}

export default App