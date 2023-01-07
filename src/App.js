import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/slices/counterSlice";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/components/Login";

function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
        <Navbar></Navbar>
      <div>
        <Login></Login>
        <button type="button" onClick={()=>{dispatch(increment())}}>
          count is: {counter}
        </button>
      </div>
    </>
  );
}

export default App;
