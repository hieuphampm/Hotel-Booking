import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import "./style.css";

const groupIntro = "We are a group of students making the biggest web project. Our group has three members.";

const contacts = [
  {
    name: "Võ Huỳnh Thái Bảo",
    mssv: "2201700186",
    phone: "0123456789",
    description: "As an active member, always ready to support work related to web development."
  },
  {
    name: "Phạm Phước Minh Hiếu",
    mssv: "2201700085",
    phone: "0987654321",
    description: "Specializes in effectively handling the frontend and API integration for the project."
  },
  {
    name: "Phạm Minh Khoa",
    mssv: "2201700189",
    phone: "0901234569",
    description: "Responsible for testing and handling errors related to the project's database."
  },
];

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: '#555' }}>{groupIntro}</p>

        {/* liên lạc */}
        {contacts.map((contact, index) => (
          <div key={index} style={cardStyle}>
            <h2 style={{ color: '#2c3e50' }}>{contact.name}</h2>
            <p><strong>MSSV:</strong> {contact.mssv}</p>
            <p><strong>SĐT:</strong> {contact.phone}</p>
            <p style={{ fontStyle: 'italic' }}>{contact.description}</p>

            {/* thêm icon liên lạc các kiểu */}
            <div>
              <Icon icon={facebook} size={30} />
            </div>
          </div>
        ))}

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px auto',
  width: '80%',
  backgroundColor: '#f9f9f9',
};

export default ContactUs;