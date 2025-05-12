import React, { useState, useEffect } from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { fetchAllUsersAPI } from '../services/allApi';
import { Table, Typography } from 'antd';

const { Title } = Typography;

const AdminDownloads = () => {
  const [users, setAllUsers] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await fetchAllUsersAPI(headers);
      if (result.status === 200) {
        setAllUsers(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
    },
    {
      title: 'Panchayat',
      dataIndex: 'panchayat',
      key: 'panchayat',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  return (
    <div className="grid grid-cols-6 h-screen">
      <AdminSideBar />
      <div className="col-span-5 p-6 overflow-auto">
        <Title level={3}>User Data</Title>
        <Table
          columns={columns}
          dataSource={users}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 'max-content' }}
          bordered
        />
      </div>
    </div>
  );
};

export default AdminDownloads;