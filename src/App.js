import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { increment } from "./redux/slices/counterSlice";

import Login from "./pages/Login/components/Login";
import { AuthProvider } from "./auth/context";
// import { AppRouter } from "./router/AppRouter";
import { LogoutRouter } from "./routes/LogoutRouter";



function App() {
 // const { counter } = useSelector((state) => state.counter);
  //const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
}

export default App;
