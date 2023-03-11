import React, { useState } from 'react'
import Card from '../UI/Card'
import Styled from '../Users/AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

    const [addUsername, setAddUsername] = useState('')
    const [addAge, setAddAge] = useState('')
    const [error, setError] = useState('')

    const usernameHandler = (event) => {
        setAddUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAddAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    const addUserHandler = (event) => {
        event.preventDefault()

        if (addUsername.trim().length === 0 || addAge.trim().length === 0) {

            setError(() => {
                return (
                    {
                        title: 'Invalid input',
                        message: 'Please enter a valid Username and Years ( Non-empty Values ).'
                    })
            }
            )
            setAddUsername('')
            setAddAge('')
            return;

        }

        if (+addAge < 1) {

            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid Years ( Greater than zero ( > 0 )).'
            })
            setAddAge('')
            return;

        }

        props.addUser(addUsername, addAge)
        setAddUsername('')
        setAddAge('')
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
            <Card className={Styled.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor='username'>Username</label>
                    <input type="text" id='username' value={addUsername} onChange={usernameHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type="number" id='age' value={addAge} onChange={ageHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;