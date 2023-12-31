import './App.css';
import './index.css';
import Avatar from './images/avatar.jpeg';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Search from './pages/Search';
import Notes from './pages/Notes';
import Bin from './pages/Bin';
import Archive from './pages/Archive';
import { useState } from 'react';
// import { useState } from "react";
// import SignUp from "./pages/Authentication/SignUp";
// import { useAuthentication } from "./Contexts/Authentication.context";
// import SideBar from "./components/SideBar";

function App() {
  // const { loggedIn } = useAuthentication();
  // const [authenticate, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  console.log(notes.length);

  function handleDeletedItem(id) {
    setNotes(notes.filter((note) => note.id === id));
    console.log(id);
  }

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

      <div className="bg-white-300 h-[100dvh] basis-1/4 ">
        <div className="mx-5 my-3 flex ">
          <img
            className="mr-4 h-20 w-20 rounded-full"
            src={Avatar}
            alt="avatar"
          />
          <div className="row flex items-center">
            <h5 className="text-xl">{user.name}</h5>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
        <NavBar />
      </div>
      <div className="min-h-screen basis-3/4 bg-violet-100  p-3	">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
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
          <Route
            path="/archive"
            element={<Archive notes={notes} tasks={tasks} />}
          />
          <Route
            path="/bin"
            element={<Bin deletedItem={handleDeletedItem} notes={notes} />}
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                isOpen={isOpen}
                tasks={tasks}
                onAddTasks={handleAddTasks}
                onToggle={handleToggle}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
