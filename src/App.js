import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Dashboard/>} />
          <Route path='products' element={<Products/>} />
          <Route path='orders' element={<Orders/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
