import React, { createContext, useState } from "react";
import Form from './components/Form'
import FormList from './components/FormList'

export const formwrapper = createContext()

const getLocalData = () => {                        // get data from local storage
  const getData = localStorage.getItem('userInfo')

  if (getData) {
    return JSON.parse(getData)
  } else {
    return []
  }

}

const App = () => {

  const [userName, setUserName] = useState('')              //for username
  const [email, setEmail] = useState('')                    //for email
  const [password, setPassword] = useState('')              //for password
  const [userData, setUserData] = useState(getLocalData)    //for taking data from form to table list
  const [isEdit, setIsEdit] = useState(false)               //for edit button
  const [editForm, setEditFrom] = useState(null)            //for table edit inputs


  const SubmitHandler = (e) => {          // for form submit
    e.preventDefault()
    const userdate = {
      id: new Date().getTime().toString(),
      userName,
      email,
      password
    };
    setUserData([...userData, userdate])
    setUserName('')
    setEmail('')
    setPassword('')
    localStorage.setItem('userInfo', JSON.stringify([...userData, userdate]));  //set data on local storage
  }

  const DeleteHandler = (userid) => {                     // table delete button action
    const filterData = userData.filter((item) => item.id !== userid)
    localStorage.setItem('userInfo', JSON.stringify(filterData));
    setUserData(filterData)
    setUserName('')
    setEmail('')
    setPassword('')
  }

  const EditHandler = (itemData) => {
    const { id, userName, email, password } = itemData
    setUserName(userName)
    setEmail(email)
    setPassword(password)
    setIsEdit(true)
    setEditFrom(id)
  }

  const editFormHandler = () => {                           // for form edit button
    const editableData = userData.map((item) => {
      if (item.id === editForm) {
        return { id: item.id, userName, email, password }
      } else {
        return item
      }
    })
    setUserData(editableData)
    localStorage.setItem('userInfo', editableData);
    setUserName('')
    setEmail('')
    setPassword('')

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
