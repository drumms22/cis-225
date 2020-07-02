import React from "react";
const style = {
  width: "13rem",
};
const fontSize = {
  fontSize: ".7vw",
};
const titleFontSize = {
  fontSize: ".9vw",
};
const height = {
  height: "200px",
};
class PizzaCard extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.id;
    this.image = props.image;
    this.name = props.name;
    this.price = props.price;
    this.text = props.text;
  }
  render() {
    console.log(this.text);
    return (
      <div className='flip-card mt-2 mb-2 mr-3 ' style={height}>
        <div className='flip-card-inner' style={style}>
          <div className='flip-card-front'>
            <div className='card h-100 pb-2' style={style}>
              <img
                src={this.image}
                className='card-img-top border-bottom border-dark'
                alt={this.name}
              />
              <div className='card-body'>
                <h5 className='card-title text-center' style={titleFontSize}>
                  <strong>{this.name}</strong>
                </h5>
              </div>
            </div>
          </div>

          <div className='card h-2 pb-2 flip-card-back' style={style}>
            <div className='card-body'>
              <div className='card-text' style={fontSize}>
                <h5 className='card-title text-center' style={titleFontSize}>
                  <strong>${this.price}</strong>
                </h5>
                <p>{this.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaCard;
