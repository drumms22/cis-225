import React from "react";
import { Container, Row } from "react-bootstrap";
import ViewMenu from "./viewMenuBanner";

const imgStyle = {
  width: "100%",
  height: "300px",
};
const headingFont = {
  fontSize: "40px",
};
class Home extends React.Component {
  render() {
    return (
      <Container className='content-margin'>
        <Row className='d-flex justify-content-start'>
          <hi className='d-flex justify-content-center p-4' style={headingFont}>
            Always made fresh to order
          </hi>
        </Row>
        <Container fluid className='border border-dark shadow'>
          <Row sm={2} className='d-flex justify-content-center'>
            <img src={"pizza.jpg"} style={imgStyle} alt={"Pizza"} />
            <img src={"flatbread.jpg"} style={imgStyle} alt={"Pizza"} />
          </Row>
          <Row sm={2} className='d-flex justify-content-center'>
            <img src={"green.jpg"} style={imgStyle} alt={"Pizza"} />
            <img src={"buffalo.jpg"} style={imgStyle} alt={"Pizza"} />
          </Row>
        </Container>
        <br />
        <hr className='content-margin' />
        <ViewMenu />
      </Container>
    );
  }
}

export default Home;
