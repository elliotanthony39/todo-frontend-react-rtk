import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
//import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/todo-frontend-react-rtk" element={<TaskList />} />
        <Route path="/todo-frontend-react-rtk/add" element={<AddTask />} />
        <Route path="/todo-frontend-react-rtk/about" element={<About />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </>
  );
}

export default App;
