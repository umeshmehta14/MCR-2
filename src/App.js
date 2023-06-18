import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Archive from "./Pages/Archive/Archive";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <h1 className="main-heading">Habit Tracker</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
