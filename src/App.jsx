import { useState } from 'react';
import './App.scss';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';

import data from './data';
import data3 from './data3';
import Home from './components/Home';
import Detail from './components/Detail';
import Search from './components/Search';
import My from './components/My';
import Cart from './components/Cart';
import All from './components/All';


function App() {
  let [goods, setGoods] = useState(data);
  let [product, setProduct] = useState(data3);
  // let [res, setRes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar variant="dark" className='header_big'>
        <Container className='header'>
          <Navbar.Brand onClick={() => { navigate('/') }} className='lg'></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/all') }}>전체</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>유니폼</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/7') }}>구단용품</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/3') }}>응원용품</Nav.Link>
          </Nav>
          <Nav className="me-auto two">
            <Nav.Link onClick={() => { navigate('/search') }} className='search'></Nav.Link>
            <Nav.Link onClick={() => { navigate('/my') }} className='my'></Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }} className='cart'></Nav.Link>
          </Nav>

          <DropdownButton
            variant="secondary"
            title=" Menu "
            data-bs-theme="dark"
          >
            <Dropdown.Item onClick={() => { navigate('/all') }}>전체</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate('/detail/0') }}>유니폼</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate('/detail/7') }}>구단용품</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate('/detail/3') }}>응원용품</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="search">검색</Dropdown.Item>
            <Dropdown.Item href="my">마이페이지</Dropdown.Item>
            <Dropdown.Item href="cart">장바구니</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home goods={goods} setGoods={setGoods} origin={origin}></Home>}></Route>
        <Route path='/all' element={<All product={product} setProduct={setProduct}></All>}></Route>
        <Route path='/detail/:id' element={<Detail goods={goods}></Detail>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/my' element={<My></My>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>

  );
}

export default App;
