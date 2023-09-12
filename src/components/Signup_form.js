import React, { useState } from 'react';
import './Signup.css';

function SignUpForm () {
  const [formData, setFormData] = useState({
    imageUrl:"",
    email: "",
    password: "",
    username: "",
    bio:"",
});

  function handleChange(f) {
    const { name, value } = f.target;
    setFormData({ ...formData, [name]: value });
  };

function handleSubmit (e){
    e.preventDefault();
    console.log(formData);
    // Send formData to the server and save it in the database (db.json in this case)


    fetch('http://localhost:8002/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      

      ;
  };

  return (
    <div className='sign-up-form'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Bio">Bio:</label>
          <textarea
            id="bio"
            type ="text"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Profile pic url</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;