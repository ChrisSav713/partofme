import React from 'react'

export default function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          <span>email:</span>
          <input required type='email' />
        </label>
        <label>
          <span>password:</span>
          <input required type='password' />
        </label>
        <button>sign up</button>
      </form>
    </div>
  )
}
