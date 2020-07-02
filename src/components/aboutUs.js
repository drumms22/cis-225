import React from "react";
import { Container, Row } from "react-bootstrap";
import ViewMenu from "./viewMenuBanner";

const textSize = {
  fontSize: "30px",
  lineHeight: "50px",
};
const titleSize = {
  fontSize: "50px",
};
class AboutUs extends React.Component {
  render() {
    return (
      <Container className='content-margin min-vh-100'>
        <Container>
          <Row className='mt-4'>
            <h1 style={titleSize}>Welcome to The Pizza Parlor!</h1>
          </Row>
          <Row className='mt-3'>
            <p style={textSize}>
              Here at The Pizza Parlor we strive to give you the best tasting
              food that is always fresh made to order. Since our inception we
              have always worked hard to make sure our customer satisfaction is
              our number one priority and will always continue to provide top of
              the service with our top of the line menu. Thank you so much for
              visiting our site and ordering with us today! If you have any
              questions, concerns, or comments please contact us by email at
              thepizzaparlor@gmail.com
            </p>
          </Row>
        </Container>
        <br />
        <hr className='content-margin' />
        <ViewMenu />
      </Container>
    );
  }
}

export default AboutUs;
