import React, { useState } from 'react';
import Input from './Input';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', address: '', password: '', mobile: '' });
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.password === "") {
      setOutput("Name or Email or Password Can't be Empty")
    }
    else {
      setOutput(`Name = ${formData.name}\nEmail = ${formData.email}\nPassword = Hidden \nAddress = ${formData.address}\nPhone No. = ${formData.mobile}`);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <Input
          label="Name = "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email = "
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password = "
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          label="Address = "
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange} />
        <Input
          label="Mobile = "
          type="number"
          name="mobile"
          value={formData.number}
          onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Form Submitted: <pre>{output}</pre></p>
    </div>
  );
}

export default RegistrationForm;
