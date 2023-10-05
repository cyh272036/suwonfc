import './App.scss';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { Container, Navbar, Nav, Carousel, Card, Button } from 'react-bootstrap';
import Home from './components/Home';
import Detail from './components/Detail';
import data from './data';
import Product from './components/Product';
import { useState } from 'react';

function App() {
  let [goods, setGoods] = useState(data);
  let [origin] = useState(data);

  let navigate = useNavigate();
  let [res, setRes] = useState([0,1,2,3,4,5,6,7,8]);

  return (
    <div className="App">
      <Navbar variant="dark" className='header_big'>
        <Container className='header'>
          <Navbar.Brand onClick={() => { navigate('/') }} className='lg'></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/all') }}>전체</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>유니폼</Nav.Link>
            <Nav.Link onClick={() => { navigate('/club') }}>구단용품</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cheering') }}>응원용품</Nav.Link>
          </Nav>
          <Nav className="me-auto two">
            <Nav.Link onClick={() => { navigate('/search') }} className='search'></Nav.Link>
            <Nav.Link onClick={() => { navigate('/my') }} className='my'></Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }} className='cart'></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home goods={goods} res={res} setGoods={setGoods} setRes = {setRes} origin={origin}></Home>}></Route>
        <Route path='/detail/:id' element={<Detail goods={goods}></Detail>}></Route>
        <Route path='/about' element={<div>About</div>}></Route> 
        <Route path='/about/member' element={<div>멤버입니다</div>}></Route>
        <Route path='/about/location' element={<div>위치입니다</div>}></Route>
      </Routes>
    </div>

  );
}

export default App;
