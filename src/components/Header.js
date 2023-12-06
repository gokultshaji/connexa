import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home';
import { Row } from 'react-bootstrap';


function Header() {
  return (
    <div className='fixed-top'>
      <Navbar bg="dark">
        <Container>
<Row>
  
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://i.postimg.cc/pT4Sm3py/contact-6546355-5376618.webp"
                width="60"
                height="65"
                className="d-inline-block align-top"
              />
              {' '}
              <b className='text-white ms-4 fs-2'>
                <span className='text-danger'>Co</span>nnexa
              </b>           
            </Navbar.Brand>
</Row>

        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
