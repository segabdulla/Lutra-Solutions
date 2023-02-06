
import React from 'react'

import StatisticsPage from '../Statistics/Statistics';

// Auth-Service
import { getUser } from '../../../utils/AuthService';

const Dashboard = () => {
    const user = getUser();
    return(
        <>
            {user.userType === 'Admin' && <StatisticsPage/> }
            {user.userType === 'Driver' && <h2>Hello from {user.userType} page</h2>}
            {user.userType === 'Merchant' && <h2>Hello from {user.userType} page</h2>}
        </>
    )}

export default Dashboard
