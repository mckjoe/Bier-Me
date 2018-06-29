import React from 'react';
import Hours from './Hours';
import Location from './Location';

function HomeDetails() {
  return (
    <div>
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-evenly;
          background-color: white;
          opacity: .7;
          
        }
        @media (max-width: 400px){
          {
            .flex {
              display: block;
            }
          }
        }
      `}</style>
      <div className="flex">
        <Hours />
        <Location />
      </div>
    </div>
  );
}
export default HomeDetails;
