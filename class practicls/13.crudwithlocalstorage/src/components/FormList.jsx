import React, { useContext } from 'react'
import './FormList.css'
import { formwrapper } from '../App'

const FormList = () => {

    const { userData, DeleteHandler, EditHandler } = useContext(formwrapper)

    const styled = {
        boxShadow: 'none',
        border: 'none',
        transform: 'none',
        width: 'auto'

    }
    return (
        <div className='container boxs d-flex justify-content-center mt-5'>
            <table className="table">
                <caption className='head text-uppercase fs-1 ' style={styled}>List of users :- {userData.length}</caption>

                <tbody style={styled}>
                    {userData.map((item, index) => {
                        const { id, userName, email, password } = item;

                        return (
                            <tr key={id} style={styled}>
                                <th scope="row" style={styled}>{index + 1}</th>
                                <td style={styled}>{userName}</td>
                                <td style={styled}>{email}</td>
                                <td style={styled}>{password}</td>
                                <td style={styled} className='p-1'>
                                    <button className="btn ms-3" onClick={() => EditHandler(item)}>Edit</button>
                                    <button className="btn ms-3" onClick={() => DeleteHandler(id)}>Remove</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FormList

