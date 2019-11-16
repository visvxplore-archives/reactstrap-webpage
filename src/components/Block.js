import React from "react";
import { Container, Row, Col } from 'reactstrap';
import './Block.css';

class Block extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Row className='mx-0' style={{backgroundColor: '#e75480'}}>
                  <Col xs='8' md='10' className='py-5 bg-dark'>
                    <p className='h4 mx-md-5 pl-3 px-md-5 my-1 text-left text-secondary'>I'm like the Robin Hood of PSD files.</p>
                  </Col>  
                  <Col xs='4' md='2' className='py-5 align-self-center'>
                    <span className='carousel-control-next-icon'></span>
                  </Col>  
                </Row>
                <Row noGutters={true} className='block-img-row'>
                  <Col md='4' className='align-self-center'>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </Col>  
                  <Col md='4'>
                    <img className="d-block w-100" src="https://media-cdn.tripadvisor.com/media/photo-s/13/be/aa/4c/img-20180709-wa0000-largejpg.jpg" alt="bridge" />
                  </Col>  
                  <Col md='4'>                    
                    <img className="d-block w-100" src="https://cdn10.bigcommerce.com/s-scgdirr/products/20715/images/49390/A762leadgreyed__75716.1528809743.330.500.jpg" alt="sweater" />

                  </Col>  
                </Row>
            </Container>
        )
    }
}

export default Block;