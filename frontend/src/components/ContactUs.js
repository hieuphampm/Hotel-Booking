import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import "./style.css";

const groupIntro = "We are a group of students creating an ambitious web project. Our group consists of three dedicated members.";

const contacts = [
  {
    name: "Võ Huỳnh Thái Bảo",
    mssv: "2201700186",
    phone: "0123456789",
    description: "An active member, always ready to support work related to web development.",
    social: "https://www.facebook.com/thaibao.vo.56211"
  },
  {
    name: "Phạm Phước Minh Hiếu",
    mssv: "2201700085",
    phone: "0987654321",
    description: "Specializes in effectively handling the frontend and API integration for the project.",
    social: "https://www.facebook.com/phuochieu2.5"
  },
  {
    name: "Phạm Minh Khoa",
    mssv: "2201700189",
    phone: "0901234569",
    description: "Responsible for testing and resolving database-related issues for the project.",
    social: "https://www.facebook.com/pmk0811"
  },
];

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.intro}>{groupIntro}</p>

      <div style={styles.contactList}>
        {contacts.map((contact, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.name}>{contact.name}</h2>
            <p><strong>MSSV:</strong> {contact.mssv}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p style={styles.description}>{contact.description}</p>

            <a href={contact.social} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <Icon icon={facebook} size={24} />
            </a>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <Link to="/" style={styles.backLink}>Back to Home</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '1.1rem',
    color: '#555',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  name: {
    color: '#2c3e50',
    marginBottom: '10px',
  },
  description: {
    fontStyle: 'italic',
    color: '#555',
  },
  iconLink: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#3b5998',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  backLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default ContactUs;
