import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './AdminDashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: '...',
    newAdmissions: '...',
    totalAdmissions: '...',
    totalPhotos: '...',
    totalMessages: '...',
  });
  const [admissions, setAdmissions] = useState([]);
  const [users, setUsers] = useState([]);
  const [userGrowthData, setUserGrowthData] = useState({
    labels: [],
    datasets: [
      {
        label: 'New Users',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        // Fetch Stats
        const statsResponse = await fetch('http://localhost:5000/api/admin/stats', {
          headers: {
            'x-auth-token': token,
          },
        });
        const statsData = await statsResponse.json();
        if (statsResponse.ok) {
          setStats({
            totalUsers: statsData.totalUsers,
            newAdmissions: statsData.newAdmissions,
            totalAdmissions: statsData.totalAdmissions,
            totalPhotos: statsData.totalPhotos,
            totalMessages: statsData.totalMessages,
          });
        } else {
          setMessage(statsData.msg || 'Failed to fetch stats');
        }

        // Fetch Admissions
        const admissionsResponse = await fetch('http://localhost:5000/api/admissions', {
          headers: {
            'x-auth-token': token,
          },
        });
        const admissionsData = await admissionsResponse.json();
        if (admissionsResponse.ok) {
          setAdmissions(admissionsData);
        } else {
          setMessage(admissionsData.msg || 'Failed to fetch admissions');
        }

        // Fetch Users
        const usersResponse = await fetch('http://localhost:5000/api/admin/users', {
          headers: {
            'x-auth-token': token,
          },
        });
        const usersData = await usersResponse.json();
        if (usersResponse.ok) {
          setUsers(usersData);
        } else {
          setMessage(usersData.msg || 'Failed to fetch users');
        }

        // Fetch User Growth Data
        const userGrowthResponse = await fetch('http://localhost:5000/api/admin/user-growth', {
          headers: {
            'x-auth-token': token,
          },
        });
        const userGrowthRawData = await userGrowthResponse.json();
        if (userGrowthResponse.ok) {
          const labels = userGrowthRawData.map(item => `${item._id.month}/${item._id.year}`);
          const data = userGrowthRawData.map(item => item.count);
          setUserGrowthData({
            labels,
            datasets: [
              {
                label: 'New Users',
                data,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
              },
            ],
          });
        } else {
          setMessage(userGrowthRawData.msg || 'Failed to fetch user growth data');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Server error');
      }
    };
    fetchData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admissions/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await response.json();
      if (response.ok) {
        // Update local state
        setAdmissions(admissions.map(adm => adm._id === id ? { ...adm, status: newStatus } : adm));
        setMessage('Admission status updated!');
      } else {
        setMessage(data.msg || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      setMessage('Server error');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('publicMedia', selectedFile);
    formData.append('eventName', eventName);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/public-gallery/upload', {
        method: 'POST',
        headers: {
          'x-auth-token': token,
        },
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('File uploaded successfully!');
        setSelectedFile(null);
        setEventName('');
        // Optionally refresh stats or gallery view
      } else {
        setMessage(data.msg || 'Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Server error');
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Registration Growth',
      },
    },
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      {message && <p className="profile-message error">{message}</p>}
      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="dashboard-card">
          <h2>New Admissions (Pending)</h2>
          <p>{stats.newAdmissions}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Admissions</h2>
          <p>{stats.totalAdmissions}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Public Photos</h2>
          <p>{stats.totalPhotos}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Messages</h2>
          <p>{stats.totalMessages}</p>
        </div>
      </div>

      <section className="admissions-section">
        <h2>Live Admissions Reporting</h2>
        {admissions.length === 0 ? (
          <p className="text-center">No admissions to display.</p>
        ) : (
          <table className="admissions-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map(admission => (
                <tr key={admission._id}>
                  <td>{admission.name}</td>
                  <td>{admission.email}</td>
                  <td>{admission.phone}</td>
                  <td>{admission.message}</td>
                  <td>{admission.status}</td>
                  <td>
                    <select
                      value={admission.status}
                      onChange={(e) => handleStatusChange(admission._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="media-manager-section">
        <h2>Website Media Manager</h2>
        <div className="upload-controls">
          <input type="file" onChange={handleFileChange} />
          <input
            type="text"
            placeholder="Event Name (Optional)"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <button onClick={handleUpload}>Upload Public Media</button>
        </div>
      </section>

      <section className="user-management-section">
        <h2>User Management</h2>
        {users.length === 0 ? (
          <p className="text-center">No users to display.</p>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="user-growth-section">
        <h2>User Registration Growth</h2>
        <div className="chart-container">
          <Line options={chartOptions} data={userGrowthData} />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;