import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Search from "./pages/Search";
import Notes from "./pages/Notes";
import Bin from "./pages/Bin";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={Search} />
          <Route path="/notes" Component={Notes} />
          <Route path="/archive" Component={Archive} />
          <Route path="/bin" Component={Bin} />
          <Route path="/tasks" Component={Tasks} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
