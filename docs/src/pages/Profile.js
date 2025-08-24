
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/auth/me', {
          headers: {
            'x-auth-token': token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setName(data.name || '');
          setEmail(data.email || '');
          setPhone(data.phone || '');
        } else {
          setMessage(data.msg || 'Failed to fetch profile');
          setMessageType('error');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Server error');
        setMessageType('error');
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Profile updated successfully!');
        setMessageType('success');
      } else {
        setMessage(data.msg || 'Failed to update profile');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Server error');
      setMessageType('error');
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
        {message && <p className={`profile-message ${messageType}`}>{message}</p>}
      </form>
    </div>
  );
};

export default Profile;
