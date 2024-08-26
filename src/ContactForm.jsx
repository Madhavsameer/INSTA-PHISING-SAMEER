import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name: <input type="text" name="name" onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" onChange={handleChange} required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

export default ContactForm;
