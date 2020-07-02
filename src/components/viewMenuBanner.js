import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const bottomImg = {
  width: "100%",
  height: "350px",
};
class ViewMenu extends React.Component {
  render() {
    return (
      <Container className='content-margin'>
        <Row>
          <h3>Please view our menu</h3>
        </Row>
        <Row>
          <Col lg={9} className='border p-0'>
            <img
              src={"./flatbread2.jpg"}
              style={bottomImg}
              className='border border-dark'
              alt={"Pizza"}
            />
          </Col>
          <Col sm={3}>
            <Row className='d-flex justify-content-center align-items-end h-50 text-center'>
              <p>
                Our menu has plenty of flavorful options for you to choose from!
              </p>
            </Row>
            <Row className='d-flex justify-content-center align-items-start h-50'>
              <Link to='/menu'>
                <Button size='lg' className='h-25 w-100'>
                  View
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ViewMenu;
