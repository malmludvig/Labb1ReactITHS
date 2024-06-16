import React from 'react'
import Navbar from '../components/Navbar';
import HelloWorld from '../components/Counter';
import Form from '../components/Form';


const Dashboard = () => {
    return (
        <div>
        <Navbar />
            <h1>Dashboard</h1>
        <HelloWorld></HelloWorld>

        <Form></Form>
        </div>
    )
};

export default Dashboard