import React from 'react';

const ContactPage = () => {
  // Sample data for contacts
  const contacts = [
    {
      name: 'Toimetuse meeskond',
      email: 'toimetus@example.com',
      phone: '+1234567890',
    },
    {
      name: 'Reklaami osakond',
      email: 'reklaam@example.com',
      phone: '+9876543210',
    },
    // Add more contacts as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Vorm esitatud!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Võtke meiega ühendust</h1>
      <p style={styles.subtext}>Kui teil on küsimusi või muresid, võtke julgelt ühendust vastava osakonnaga:</p>

      <ul style={styles.contactList}>
        {contacts.map((contact, index) => (
          <li key={index} style={styles.contactItem}>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Telefon: {contact.phone}</p>
          </li>
        ))}
      </ul>

      <div style={styles.inquiryForm}>
        <h2 style={styles.formHeading}>Saatke päring</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.formLabel}>
            Nimi:
            <input type="text" name="name" style={styles.inputField} required />
          </label>
          <label style={styles.formLabel}>
            Email:
            <input type="email" name="email" style={styles.inputField} required />
          </label>
          <label style={styles.formLabel}>
            Sõnum:
            <textarea name="message" style={styles.textareaField} rows="4" required />
          </label>
          <button type="submit" style={styles.submitButton}>Esita</button>
        </form>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtext: {
    color: '#555',
    marginBottom: '20px',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  contactItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  inquiryForm: {
    marginTop: '40px',
  },
  formHeading: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  formLabel: {
    marginBottom: '10px',
  },
  inputField: {
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  },
  textareaField: {
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ContactPage;
