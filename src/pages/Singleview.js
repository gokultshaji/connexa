import { queries } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



function Singleview() {
  const [contact, setContact] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get('/db.json');
        const contacts = response.data.contacts;
        const name = params.name;
        const foundContact = contacts.find((c) => c.name === name);
        setContact(foundContact);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchContact();
  }, [params.name]);

  return (
    <div>
      {contact && (
        <div className='p-5 mr-auto'>
         
         <Container>
          
            <Row className="text-center">
              <Col lg={6} md={6} className="ms-5 mt-5 mb-5 mr-auto">
                <img
                  style={{ height: '500px', width: '100%' , marginLeft:'-82px'}}
                  src={contact.profile}
                  alt="Profile"
                />
              </Col>
              <Col lg={6} md={6} className="mr-auto">
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Mobile: {contact.mobile}</p>
                <p>Location: {contact.location}</p>
              </Col>
            </Row>
         </Container>
<div className='text-center'>
  <a href="/">Back to Home</a>
</div>
        </div>
      )}
    </div>
  );
 
}


export default Singleview;
