import React, { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { Box } from "@mui/material";

const Dashboard = () => {
  const { logged } = useContext(AuthContext);
  console.log(logged);
  return (
    <>
      <Box>
        <div>
          <h1>Home Page</h1>
          <h3>Bienvenido</h3>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
