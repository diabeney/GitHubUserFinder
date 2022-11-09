import React from 'react';
import PuffLoader  from 'react-spinners/PuffLoader';

export const override = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: ' 100vw',
    height: '100vh',
    display: 'grid',
    placeContent: 'center',
  }

function Loader() {

  return (
    <div style={override}>
      <PuffLoader  color={'rgb(238, 0, 99)'} size={ 150 } />
    </div>
  )
}

export default Loader