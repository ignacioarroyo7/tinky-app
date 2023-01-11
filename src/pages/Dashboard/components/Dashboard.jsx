import React,{useContext} from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';

const Dashboard = () => {
    const {logged} = useContext(AuthContext)
  console.log(logged)
    return (
        <div>
            <h1>Dashboard Page</h1>
            <h3>Bienvenido</h3>
        </div>
    );
};

export default Dashboard;