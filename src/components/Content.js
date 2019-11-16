import React from "react";
import { Container, Row, Col } from 'reactstrap';

class Content extends React.Component {
    render() {
        return (
            <Container fluid={true} className='text-left p-5' style={{backgroundColor: '#e9ecef'}}>
                <h2 className='text-primary'>BlazRobar.com</h2>
                <Row className='font-weight-bold' style={{opacity: '0.6'}}>
                  <Col className='my-3' md='6'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus consequat laoreet laoreet. Integer auctor est ut nulla venenatis,
                        ut ornare nulla sagittis. Aenean fringilla posuere erat at maximus. 
                        Nam id turpis eu magna bibendum pulvinar ut ut magna. Cras imperdiet tellus
                        at sapien placerat, sit amet malesuada nisl blandit. In placerat enim nisi,
                        ac accumsan est iaculis pulvinar. Mauris dictum turpis ac rutrum venenatis. 
                        Suspendisse feugiat tortor eget orci malesuada malesuada.
                    </p>
                    <p> 
                        Pellentesque quis 
                        suscipit est. Sed venenatis ante arcu, eget ornare est pretium non. Suspendisse 
                        semper a purus ut suscipit. Sed tempor finibus lacinia.
                    </p>
                  </Col>  
                  <Col className='my-3' md='6'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus consequat laoreet laoreet. Integer auctor est ut nulla venenatis,
                        ut ornare nulla sagittis. Aenean fringilla posuere erat at maximus. 
                        Nam id turpis eu magna bibendum pulvinar ut ut magna. Cras imperdiet tellus
                        at sapien placerat, sit amet malesuada nisl blandit. In placerat enim nisi,
                        ac accumsan est iaculis pulvinar. Mauris dictum turpis ac rutrum venenatis. 
                        Suspendisse feugiat tortor eget orci malesuada malesuada.
                    </p>
                    <p>
                        Pellentesque quis 
                        suscipit est. Sed venenatis ante arcu, eget ornare est pretium non. Suspendisse 
                        semper a purus ut suscipit. Sed tempor finibus lacinia.
                    </p>
                  </Col>  
                </Row>
            </Container>
        )
    }
}

export default Content;