import React, { useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'


const LocalDataHandler = () => {
  const getData = localStorage.getItem('userdetail')

  if (getData) {
    return JSON.parse(getData)
  } else {
    return []
  }
}

const App = () => {

  const [userData, setUserData] = useState(LocalDataHandler())

  const FormDataHandler = (username, email, password) => {
    setUserData((prev) => {
      return (
        [...prev, { username: username, email: email, password: password }]
      )
    })
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
