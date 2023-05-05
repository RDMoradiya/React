import React, { useState } from "react";

export const getlocaldata = () => {
  const getdata = localStorage.getItem("details")
  if (getdata) {
    return JSON.parse(getdata)
  } else {
    return []
  }
}

const App = () => {
  const [name, setName] = useState("")
  const [list, setList] = useState(getlocaldata())
  const [selectedRow, setSelectedRow] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      id: new Date().getTime().toString()
    }
    setList([...list, data])
    localStorage.setItem("details", JSON.stringify([...list, data]))
    setName("")
  }

  const deletHandler = (id) => {
    const deldata = list.filter((item) => item.id !== id)
    setList(deldata)
    localStorage.setItem("details", JSON.stringify(deldata))
  }

  return (
    <>
      {/* form */}
      <div>
        <form onSubmit={submitHandler}>
          Name :-
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button>add</button>
        </form>
      </div>
      {/* list */}
      <div>
        <table>
          <tbody>
            {
              list.map((item, index) => {
                const { name, id } = item
                return (
                  <tr key={id} style={{ textDecorationLine: selectedRow === index ? 'line-through' : 'none' }}>
                    <td >{name}</td>
                    <td>
                      <button onClick={() => deletHandler(id)}>x</button>
                      <button onClick={() => setSelectedRow(index)}>v</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div >
    </>
  )
}

export default App;
