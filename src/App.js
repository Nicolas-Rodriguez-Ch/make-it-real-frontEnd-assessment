import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:productId' element={<ProductDetailPage/>}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
