import React from 'react';
import { Jumbotron, Container, Row, Col  } from 'reactstrap';

const Introduction = (props) => {
  return (
    <div>
      <Jumbotron className="bg-primary text-white mb-0 rounded-0">
          <Container className="py-5">
              <Row className="text-left">
                  <Col md="7">
                    <h1 className="display-4 font-weight-bold">Awesome free PSD templates &amp; Resources</h1>
                    <p className="h5 my-4">
                        <span style={{opacity: 0.8}}>www.BlazRobar.com</span>
                        <span 
                            className="float-right carousel-control-next-icon mr-5" 
                            style={{fontSize: 'inherit'}}
                            aria-hidden="true">
                        </span>
                    </p>
                  </Col>
              </Row>
          </Container>
      </Jumbotron>
    </div>
  );
};

export default Introduction;