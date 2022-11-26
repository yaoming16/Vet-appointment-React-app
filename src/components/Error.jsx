import { useState, useEffect } from 'react';

function Error( {mensaje} ) {
  return (
    <div>
      <div className='my-2 bg-red-800 text-white text-center p-3 uppercase font-bold rounded-sm'>
        <p>{mensaje}</p>
      </div>
    </div>
  )
}

export default Error;