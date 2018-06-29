import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
        .beer p {
          margin: 5px 0;
        }
        img {
          width: 100%;
        }
        .beer {
          background-color: snow;
          opacity: .8;
          padding: 15px 25px;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
        span {
          color: green;
        }
      `}</style>

      <div>
        <div className="beer">
          <img src={props.image}/>
          <h3>{props.name}</h3>
          <div className="flex">
            <p>Type: {props.brewer}</p>
            <p>{props.description}</p>
          </div>
          <p>ABV: {props.abv}</p>
          <p><span>Cost: ${props.price}.00</span></p>
          <p>Beers Remaining: {props.remaining}</p>
        </div>

      </div>
    </div>
  );
}
Beer.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
};
export default Beer;
