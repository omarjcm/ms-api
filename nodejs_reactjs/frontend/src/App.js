import React, { useEffect, useState } from 'react';

const App = () => {

  const [backendData, setBackendData] = useState({})

  useEffect(() => {
    fetch('/api')
      .then((data) => { data.json() })
      .then( (data) => { setBackendData(data) } )
      .catch((error) => {console.log( error )})
  }, [])

  return ( 
    <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
        )}
    </div>
   );
}
 
export default App;