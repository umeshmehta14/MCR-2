import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useData } from './Context/DataProvider';
import Header from './Components/Header';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import Profile from './Pages/Profile';


function App() {
  const {loading} = useData();
  return (
    <>
    {
      loading &&  <h1>Loading</h1>
    }
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;
