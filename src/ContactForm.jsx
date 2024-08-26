import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
    .then(() => setFormSubmitted(true))
    .catch((error) => alert(error));
  };

  if (formSubmitted) {
    return <p>Thank you for your submission!</p>;
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
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
