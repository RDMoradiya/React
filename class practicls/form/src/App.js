import React, { useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'


const App = () => {

  const [userData, setUserData] = useState([])

  const FormDataHandler = (username, email, password) => {
    setUserData((prev) => {
      return (
        [...prev, { username: username, email: email, password: password }]
      )
    })
  }

  return (
    <>
      <Form formData={FormDataHandler} />
      <FormList user={userData} />
    </>
  )
}

export default App;
