import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const result = await axios.get('/db.json');
    setContacts(result.data.contacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div > 
      <Container>
        <Row>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-5">
                <Link to={`/view/${contact.name}`} style={{ textDecoration: 'none' }}>
                  <Card style={{ height: '400px', marginTop:'50px' }}>
                    <Card.Img  style={{ height: '350px' }} variant="top" src={contact.profile} />
                    <Card.Body>
                      <Card.Title className="text-center text-dark">{contact.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <h1>No data found</h1>
          )}
        </Row>
      </Container>
      <hr />
      <hr />
    </div>
  );
}

export default Home;
