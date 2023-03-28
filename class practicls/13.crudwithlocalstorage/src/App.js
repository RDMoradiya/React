import React, { createContext, useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'

export const formwrapper = createContext()

const getLocalData = () => {                        // get data from local storage
  const getLocalData = localStorage.getItem('userInfo')

  if (getLocalData) {
    return JSON.parse(getLocalData)
  } else {
    return []
  }

}

const App = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState(getLocalData)
  const [isEdit, setIsEdit] = useState(false)
  const [editForm, setEditFrom] = useState(null)


  const SubmitHandler = (e) => {
    e.preventDefault()
    let userdate = {
      id: new Date().getTime().toString(),
      userName,
      email,
      password
    };
    setUserData([...userData, userdate])
    localStorage.setItem('userInfo', JSON.stringify([...userData, userdate]));
    setUserName('')
    setEmail('')
    setPassword('')
  }

  const DeleteHandler = (userid) => {
    const filterData = userData.filter((item) => item.id !== userid)
    localStorage.setItem('userInfo', JSON.stringify(filterData));
    setUserData(filterData)
  }

  const EditHandler = (itemData) => {
    const { id, userName, email, password } = itemData
    setUserName(userName)
    setEmail(email)
    setPassword(password)
    setIsEdit(true)
    setEditFrom(id)
  }

  const editFormHandler = (e) => {
    e.preventDefault()
    let editableData = userData.map((item) => {
      if (item.id === editForm) {
        return { id: item.id, userName, email, password }
      } else {
        return item
      }
    })
    localStorage.setItem('userInfo', JSON.stringify(editableData));
    setUserData(editableData)
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
