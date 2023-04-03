import React, { useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'


// get value from local storage
const LocalDataHandler = () => {
  const getData = localStorage.getItem('userdetail')

  if (getData) {
    return JSON.parse(getData)
  } else {
    return []
  }
}

const App = () => {

  // from local storage getting value put on state for view on page loading
  const [userData, setUserData] = useState(LocalDataHandler())

  const FormDataHandler = (username, email, password) => {
    setUserData((prev) => {
      return (
        [...prev, { username: username, email: email, password: password }]
      )
    })

    // set value on local storage
    localStorage.setItem('userdetail', JSON.stringify([...userData, { username: username, email: email, password: password }]))
  }

  return (
    <>
      <Form formData={FormDataHandler} />
      <FormList user={userData} />
    </>
  )
}

export default App;
