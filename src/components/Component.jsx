import React from 'React';

function Component() {
  return (
    <div>
      <style jsx>{`
        p {
          text-align: center;
          background-color: green;
          border: 1px solid black;
          padding-top: 20px;
          padding-bottom: 20px;
          width: 30%;
          display: flex;
          justify-content: center;
          margin: 40px auto 0 auto;
          color: white;
        }
      `}</style>

      <p>Component Component Works</p>
    </div>
  );
}
export default Component;
