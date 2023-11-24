import "./App.css";
import "./index.css";
import Avatar from "./images/avatar.jpeg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Authentication/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Search from "./pages/Search";
import Notes from "./pages/Notes";
import Bin from "./pages/Bin";
import Archive from "./pages/Archive";
import { useState } from "react";
// import { useState } from "react";
// import SignUp from "./pages/Authentication/SignUp";
// import { useAuthentication } from "./Contexts/Authentication.context";
// import SideBar from "./components/SideBar";

function App() {
  // const { loggedIn } = useAuthentication();
  // const [authenticate, setAuthenticated] = useState(false);
  const login = { avatar: "", name: "John Doe", email: "johndoe@example.com" };
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  function handleDeleteItem(id) {
    setNotes(notes.filter((note) => note.id !== id));
    console.log(id);
  }

  function handleToggle(is) {
    setIsOpen((is) => !is);
  }
  console.log(notes);

  function handleAddNotes(note) {
    setNotes((notes) => [...notes, note]);
  }
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  // function handleActive(active) {
  //   setActive((active) => !active);
  // }
  return (
    <div className="flex flex-row ">
      {/* <Router>{renderRoutes()}</Router> */}
      <Router>
        <div className="basis-1/4 bg-white-300 h-[100dvh] ">
          <div className="flex my-3 mx-5 ">
            <img
              className="rounded-full h-20 w-20 mr-4"
              src={Avatar}
              alt="avatar"
            />
            <div className="flex row items-center">
              <h5 className="text-xl">{login.name}</h5>
              <p className="text-sm">{login.email}</p>
            </div>
          </div>
          <NavBar />
        </div>
        <div className="basis-3/4 bg-violet-100 p-3  min-h-screen	">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  notes={notes}
                  tasks={tasks}
                  onDeleteItem={handleDeleteItem}
                />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route
              path="/notes"
              element={
                <Notes
                  notes={notes}
                  onAddNotes={handleAddNotes}
                  onToggle={handleToggle}
                  isOpen={isOpen}
                  onDeleteItem={handleDeleteItem}
                />
              }
            />
            <Route path="/archive" element={<Archive />} />
            <Route path="/bin" element={<Bin />} />
            <Route
              path="/tasks"
              element={
                <Tasks
                  tasks={tasks}
                  onAddTasks={handleAddTasks}
                  onToggle={handleToggle}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
