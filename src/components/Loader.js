import React from 'react';
import StyledLoader from './styled/StyledLoader';

const Loader = () => {
  return (
    <StyledLoader>
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  )
}

export default Loader;