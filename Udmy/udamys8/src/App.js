import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


function App() {

  const [userInput, setUserInput] = useState([])

  const setInputUsername = (uName, uAge) => {
    setUserInput((prevUsersList) => {

      // return ([...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }])

      const addData = [...prevUsersList];
      addData.unshift({ name: uName, age: uAge, id: Math.random().toString() })
      return addData
    })
  }

  return (
    <div>
      <AddUser addUser={setInputUsername} />
      <UsersList users={userInput} />
    </div>
  );
}

export default App;
