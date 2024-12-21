import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
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
    GithubLink: "https://facebook.com/khoa.example",
  },
];

const ContactUs = () => {
  return (
    <div>
      <div className="container py-5 text-white">
        <h1 className="text-center fw-bold mb-4">Contact Us</h1>
        <p className="text-center fs-5 mb-5">{groupIntro}</p>

        <div className="row justify-content-center">
          {contacts.map((contact, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm p-4 text-dark">
                <h2 className="fw-bold mb-2">{contact.name}</h2>
                <p><strong>MSSV:</strong> {contact.mssv}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p className="fst-italic text-muted">{contact.description}</p>

                <div className="text-center mt-3">
                  <a href={contact.GithubLink} target="_blank" rel="noopener noreferrer">
                    <Icon icon={github} size={35} className="text-dark" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-dark w-50 px-4 py-2 fs-5">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
