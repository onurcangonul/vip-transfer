import React from 'react'
import UserList from '@/components/UserTable'
import CardStatistics from '@/components/Ui/Cards'
const Dashboard = () => {
  return (
    <>
      <UserList />
      <CardStatistics />
    </>
  );
}

export default Dashboard