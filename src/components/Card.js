import React from "react";
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div className="card mt-2">
        <img
          src={this.props.image}
          style={{ height: "280px" }}
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">
              Last updated {this.props.cardTime} mins ago
            </small>
          </p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  cardTitle: "Başlık",
  //cardTime: "Unknown"
}

Card.propTypes = {
  cardTime: PropTypes.string
}

export default Card;
