import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { Navbars } from "./components/navbar";
import CreatePost from "./pages/create-post/CreatePost";
import TestNav from './components/TestNav';

function App() {
  return (
    <div className="App main">
      <Router>
        <Navbars />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/testnav' element={<TestNav />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
