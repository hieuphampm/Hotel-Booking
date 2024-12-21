import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import "./style.css";

const groupIntro = "We are a group of students making the biggest web project. Our group has three members.";

const contacts = [
  {
    name: "Võ Huỳnh Thái Bảo",
    mssv: "2201700186",
    phone: "0123456789",
    description: "As an active member, always ready to support work related to web development.",
    GithubLink: "https://github.com/vina123baov",
  },
  {
    name: "Phạm Phước Minh Hiếu",
    mssv: "2201700085",
    phone: "0987654321",
    description: "Specializes in effectively handling the frontend and API integration for the project.",
    GithubLink: "https://github.com/hieuphampm",
  },
  {
    name: "Phạm Minh Khoa",
    mssv: "2201700189",
    phone: "0901234569",
    description: "Responsible for testing and handling errors related to the project's database.",
    facebookLink: "https://facebook.com/khoa.example",
  },
];

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Contact Us</h1>
        <p style={introStyle}>{groupIntro}</p>

        {contacts.map((contact, index) => (
          <div key={index} style={cardStyle}>
            <h2 style={nameStyle}>{contact.name}</h2>
            <p><strong>MSSV:</strong> {contact.mssv}</p>
            <p><strong>SĐT:</strong> {contact.phone}</p>
            <p style={descriptionStyle}>{contact.description}</p>

            <div style={iconContainerStyle}>
              <a href={contact.facebookLink} target="_blank" rel="noopener noreferrer">
                <Icon icon={github} size={35} style={iconStyle} />
              </a>
            </div>
          </div>
        ))}

        <div style={backLinkContainerStyle}>
          <Link to="/" style={backLinkStyle}>Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '40px 20px',
  background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
  color: '#fff',
  minHeight: '100vh',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '36px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '#fff',
};

const introStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  color: '#eee',
  fontSize: '18px',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '0 auto',
};

const cardStyle = {
  border: 'none',
  borderRadius: '12px',
  padding: '30px',
  margin: '20px auto',
  width: '80%',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  color: '#333',
  transform: 'scale(1)',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontStyle: 'italic',
  color: '#555',
  fontSize: '16px',
  lineHeight: '1.5',
};

const iconContainerStyle = {
  marginTop: '15px',
  textAlign: 'center',
};

const iconStyle = {
  color: '#333',
  cursor: 'pointer',
  transition: 'color 0.3s ease-in-out',
};

const backLinkContainerStyle = {
  marginTop: '30px',
  textAlign: 'center',
};

const backLinkStyle = {
  color: '#fff',
  backgroundColor: '#007bff',
  padding: '12px 25px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

export default ContactUs;