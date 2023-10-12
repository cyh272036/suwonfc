import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Home from './components/Home';
import Detail from './components/Detail';
import data from './data';
import { useState } from 'react';

function App() {
  let [goods, setGoods] = useState(data);
  let [res, setRes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  let navigate = useNavigate();

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

          <DropdownButton
            variant="secondary"
            title=" Menu "
            data-bs-theme="dark"
          >
            <Dropdown.Item href="#/action-1">전체</Dropdown.Item>
            <Dropdown.Item href="#/action-2">유니폼</Dropdown.Item>
            <Dropdown.Item href="#/action-3">구단용품</Dropdown.Item>
            <Dropdown.Item href="#/action-3">응원용품</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-1">검색</Dropdown.Item>
            <Dropdown.Item href="#/action-2">마이페이지</Dropdown.Item>
            <Dropdown.Item href="#/action-3">장바구니</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home goods={goods} res={res} setGoods={setGoods} setRes={setRes} origin={origin}></Home>}></Route>
        <Route path='/detail/:id' element={<Detail goods={goods}></Detail>}></Route>
        <Route path='/about' element={<div>About</div>}></Route>
        <Route path='/about/member' element={<div>멤버입니다</div>}></Route>
        <Route path='/about/location' element={<div>위치입니다</div>}></Route>
      </Routes>
    </div>

  );
}

export default App;
