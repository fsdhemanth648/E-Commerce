import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='p-5'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/products/:productID' exact element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
