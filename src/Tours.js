import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>Out tours</h2>
        <div className='underline'></div>
      </div>
      <div className=''>
        {tours.map((tour) => {
        return  <Tour removeTour={removeTour} key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
