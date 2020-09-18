import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie-player'
import animationData from './stack.json'

export const Stack = ({ width, height }) => {
  // const [ isStopped, setIsStopped ] = useState(true)
  const [ isPlaying, setIsPlaying ] = useState(false)


  return (<Lottie loop
                  animationData={animationData}
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}
                  style={{height: height, width: width}}
                  play={isPlaying} />)
}

Stack.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
