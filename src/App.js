import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { increment } from "./redux/slices/counterSlice";

import Login from "./pages/Login/components/Login";
import { AuthProvider } from "./auth/context";
// import { AppRouter } from "./router/AppRouter";
import { LogoutRouter } from "./routes/LogoutRouter";
import {ThemeProvider, createTheme } from "@mui/material/styles";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'


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

const queryClient = new QueryClient()

function App() {
 // const { counter } = useSelector((state) => state.counter);
  //const dispatch = useDispatch();

  return (
    <>
      <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LogoutRouter>
          <div>
            <Login></Login>
          </div>
      </LogoutRouter>
      </AuthProvider>
      </QueryClientProvider>
          </ThemeProvider>
    </>
  );
}

export default App;
