import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { increment } from "./redux/slices/counterSlice";

import Login from "./pages/Login/components/Login";
import { AuthProvider } from "./auth/context";
// import { AppRouter } from "./router/AppRouter";
import { LogoutRouter } from "./routes/LogoutRouter";
import {ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
      type: 'light',
      primary: {
        main: '#e86b28',
      },
      secondary: {
        main: '#fdbc22',
      },
      warning: {
        main: '#ffea00',
      },
      background: {
        default: '#e7e8ea',
      },
    },
});

function App() {
 // const { counter } = useSelector((state) => state.counter);
  //const dispatch = useDispatch();

  return (
    <>
      <ThemeProvider theme={theme}>
    <AuthProvider>
      <LogoutRouter>
          <div>
            <Login></Login>
            {/* <button type="button" onClick={()=>{dispatch(increment())}}>
          count is: {counter}
        </button> */}
          </div>
      </LogoutRouter>
      </AuthProvider>
          </ThemeProvider>
    </>
  );
}

export default App;
