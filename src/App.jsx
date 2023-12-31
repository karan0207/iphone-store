/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import Front from "./components/Front";

const App = () => {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/iphone-store/" element={<Loader/>}/>
          <Route path="/iphone-store/Home" element={<Front/>}/>
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
