import React from 'react';
import PropTypes from 'prop-types';

function Snack(props) {
  return (
    <div>
      <style jsx>{`
        .snack {
          margin-top: 15px;
          background-color: snow;
          opacity: .8;
          padding: 15px 25px;
        }
        img {
          width: 100%;
        }
      `}
      </style>
      <div>
        <div className="snack">
          <img src={props.image}/>
          <h3>{props.snack}</h3>
          <p>{props.cost}</p>
        </div>
      </div>
    </div>
  );
}
Snack.propTypes = {
  image: PropTypes.string.isRequired,
  snack: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};
export default Snack;
