import React, { useEffect, useState } from "react"
import axios from "axios"
import "./createUser.css"
const CreateUser = () => {
  const [state, setState] = useState({ users: [] })
  const [change, setChange] = useState({ username: "" })

  useEffect(async function() {
    getUsers()
  }, [])

  const getUsers = async () => {
    const res = await axios.get("http://localhost:4001/api/users")
    setState({ users: res.data })
  }

  const onChangeUsername = e => {
    setChange({
      username: e.target.value
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
    await axios.post("http://localhost:4001/api/users", {
      username: change.username
    })
    setChange({ username: "" })
    getUsers()
  }

  const deleteUser = async e => {
    await axios.delete("http://localhost:4001/api/users/" + e)
    getUsers()
  }

  return (
    <div className="content__user">
      <div className="content__user-left">
        <div className="card__form">
          <h3>Create New User</h3>
          <form onSubmit={onSubmit}>
            <div classNmae="user__form-group">
              <input
                type="text"
                value={change.username}
                className="user__form-input"
                onChange={onChangeUsername}
              ></input>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="content__user-right">
        <ul className="user__right-ul">
          {state.users.map(user => (
            <li key={user._id}>
              <div className="user__li">
                {user.username}
                <button type="submit" onClick={() => deleteUser(user._id)}>
                  borrar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CreateUser
