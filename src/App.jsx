import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const Header = React.lazy(() => import('./components/Header'));
const ProductList = React.lazy(() => import('./components/ProductList'));
import Loading from './components/Loading';
import './App.scss'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header onSearch={setSearchTerm} />
        <ProductList searchTerm={searchTerm} />
      </Suspense>
    </Router>
  );
}


export default App
