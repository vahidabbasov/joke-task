import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home/Index'
import Favourites from './Pages/Favourites/Index'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/favourites" element={<Favourites/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
