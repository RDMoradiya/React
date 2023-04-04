import React, { createContext, useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'

export const formwrapper = createContext()

const getLocalData = () => {                                       // get data from local storage               
  const getLocalData = localStorage.getItem('userInfo')

  if (getLocalData) {
    return JSON.parse(getLocalData)
  } else {
    return []
  }
}

const App = () => {

  const [userName, setUserName] = useState('')                      // for get data from form to table
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState(getLocalData)
  const [isEdit, setIsEdit] = useState(false)                       // for form edit button
  const [editForm, setEditFrom] = useState(null)                    // for form edit button handler


  const SubmitHandler = (e) => {                                    // for form form submit  
    e.preventDefault()
    let userdate = {
      id: new Date().getTime().toString(),                         // for random id's
      userName,
      email,
      password
    };
    setUserData([...userData, userdate])
    localStorage.setItem('userInfo', JSON.stringify([...userData, userdate]));    // set data to local storage
    setUserName('')
    setEmail('')
    setPassword('')
  }

  const DeleteHandler = (userid) => {                               // for delete button
    const filterData = userData.filter((item) => item.id !== userid)
    localStorage.setItem('userInfo', JSON.stringify(filterData));
    setUserData(filterData)
  }

  const EditHandler = (itemData) => {                               // for table edit button
    const { id, userName, email, password } = itemData
    setUserName(userName)
    setEmail(email)
    setPassword(password)
    setIsEdit(true)
    setEditFrom(id)
  }

  const editFormHandler = (e) => {                                    // for form edit button
    e.preventDefault()
    let editableData = userData.map((item) => {
      if (item.id === editForm) {
        return { id: item.id, userName, email, password }
      } else {
        return item
      }
    })
    setUserData(editableData)
    localStorage.setItem('userInfo', JSON.stringify(editableData));
    setUserName('')
    setEmail('')
    setPassword('')
    setIsEdit(false)
    setEditFrom(null)
  }

  return (
    <>
      <formwrapper.Provider value={{ userName, setUserName, email, setEmail, password, setPassword, SubmitHandler, userData, setUserData, DeleteHandler, EditHandler, isEdit, setIsEdit, editFormHandler }}>
        <Form />
        <FormList />
      </formwrapper.Provider>
    </>
  )
}

export default App;
