import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import menuItems from "../data.json";
import PizzaCard from "./pizzaCards";
class Menu extends React.Component {
  render() {
    return (
      <Container fluid className='content-margin row justify-content-center'>
        <Col lg='10'>
          <Card>
            <Card.Header className='text-center'>
              <h1>Pizza's</h1>
            </Card.Header>
            <Card.Body>
              <Row className='justify-content-center'>
                {menuItems.pizza.map((data) => (
                  <PizzaCard
                    key={data.id}
                    image={
                      "https://github.com/drumms22/cis-225/blob/gh-pages/" +
                      data.image
                    }
                    name={data.name}
                    price={data.price}
                    text={data.text}
                  />
                ))}
              </Row>
              <Col>
                <p>
                  All pizza's come with the toppings described. Extra toppings
                  are $0.25 per topping added.
                </p>
              </Col>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className='text-center'>
              <h1>Sandwhich's</h1>
            </Card.Header>
            <Card.Body>
              <Row className='justify-content-center'>
                {menuItems.sandwich.map((data) => (
                  <PizzaCard
                    key={data.id}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    text={data.text}
                  />
                ))}
              </Row>
              <Col>
                <p>
                  All sandwich's come with fries. Substitute for salad for an
                  extra $1.00.
                </p>
              </Col>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className='text-center'>
              <h1>Other's</h1>
            </Card.Header>
            <Card.Body>
              <Row className='justify-content-center'>
                {menuItems.other.map((data) => (
                  <PizzaCard
                    key={data.id}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    text={data.text}
                  />
                ))}
              </Row>
              <Col>
                <p>
                  All pasta's come with fresh bread. All other dishes come with
                  your choice of two sides: veggie of the day, fries, mashed
                  potatoes, small salad, or fresh bread.
                </p>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default Menu;
