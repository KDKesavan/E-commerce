import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 600 },
    { name: 'Mar', sales: 800 }
];

const Dashboard = () => {
    return (
        <center>
            <div className='dashboardDiv'>
                <h2>Dashboard</h2>
                <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
            </div>

        </center>
    );
};

export default Dashboard;