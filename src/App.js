import "./App.css";
import "./index.css";
import Avatar from "./images/avatar.jpeg";
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
    <div className="flex flex-row">
      <Router>
        <div className="basis-1/4 bg-white-300 h-[100dvh]">
          <div className="flex my-3 mx-5">
            <img
              className="rounded-full h-20 w-20 mr-4"
              src={Avatar}
              alt="avatar"
            />
            <div className="flex row items-center">
              <h5 className="text-xl">John Doe</h5>
              <p className="text-sm">johndoe@gmail.com</p>
            </div>
          </div>
          <NavBar />
        </div>
        <div className="basis-3/4 bg-violet-100 p-3 h-[100dvh]">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/search" Component={Search} />
            <Route path="/notes" Component={Notes} />
            <Route path="/archive" Component={Archive} />
            <Route path="/bin" Component={Bin} />
            <Route path="/tasks" Component={Tasks} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
