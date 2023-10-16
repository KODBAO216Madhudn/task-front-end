import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// -----------------------------------------------------------------------
const LandingPage = (props) => {

  return (
    <div>
      <h1>Welcome to Landing Page</h1>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  )
}

export default LandingPage
