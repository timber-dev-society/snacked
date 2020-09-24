import React from 'react'
import { OneTimeOver } from '../../assets/lottie/one-time-over'
import animationData from '../../assets/lottie/json/hotdog.json'

export default () => (
  <div className="flex items-center">
    <OneTimeOver animationData={animationData} style={{width: '200px', height: '200px'}} />
    <h1 className="text-5xl">Snacked</h1>
    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ml-auto">
      + Ajouter une collection
    </button>
  </div>
);
