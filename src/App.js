import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Users from "./pages/Users";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { checkToken, getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    // useEffect tells VS to run the code only once, and not go on an infinite loop

    // setUser(checkToken());
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/notes" Component={Notes} />
          <Route path="/notes/:noteId" Component={Note} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
