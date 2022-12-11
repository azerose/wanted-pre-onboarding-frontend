import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginContainer from "./components/login/logincontainer";
import SignupContainer from "./components/signup/signupcontainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />}></Route>
        <Route path="/signup" element={<SignupContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
