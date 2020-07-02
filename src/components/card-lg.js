import React from "react";
import { Card } from "react-bootstrap";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.key = props.id;
    this.image = props.image;
    this.name = props.name;
    this.price = props.price;
    this.text = props.text;
  }
  render() {
    return (
      <Card>
        <Card.Header className='text-center'>
          <h1>{this.title}</h1>
        </Card.Header>
        <Card.Body>
          <Row className='justify-content-center'>
            <PizzaCard
              key={this.id}
              image={this.image}
              name={this.name}
              price={this.price}
              text={this.text}
            />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Menu;
