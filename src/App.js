import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/login/logincontainer";
import SignupContainer from "./components/signup/signupcontainer";
import TodoConatainer from "./components/todo/todocontainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginContainer />}></Route>
        <Route path="/signup" element={<SignupContainer />}></Route>
        <Route path="/todo" element={<TodoConatainer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
