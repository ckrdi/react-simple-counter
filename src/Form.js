import { useState } from 'react'
import './Form.css'

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople((people) => {
        return [...people, person];
      })
      setFirstName('')
      setEmail('')
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <button className="btn">Submit</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div key={id} className="list">
            <h4>{firstName}</h4>
            <h5>{email}</h5>
          </div>
        )
      })}
    </>
  )
}