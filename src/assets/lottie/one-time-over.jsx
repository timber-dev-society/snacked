import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie-player'

export const OneTimeOver = ({ animationData, ...props }) => {
  const [ isPlaying, setIsPlaying ] = useState(false)


  return (<Lottie loop={true}
                  animationData={animationData}
                  onMouseEnter={() => setIsPlaying(true)}
                  onLoopComplete={() => setIsPlaying(false)}
                  play={isPlaying}
                  {...props} />)
}

OneTimeOver.propTypes = {
  animationData: PropTypes.object.isRequired,
}
