import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
        .beer p {
          margin: 5px 0;
        }
      `}</style>

    <div>
      <div className="beer">
        <h3>{props.name}</h3>
        <p>{props.brewer}</p>
        <p>{props.description}</p>
        <p>{props.abv}</p>
        <p>{props.price}</p>
        <p>{props.remaining}</p>
      </div>

    </div>
    </div>
  );
}
Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
};
export default Beer;
