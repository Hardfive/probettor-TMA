import React, { useState } from 'react'
import CollapsibleTable from '../composants/tableComponent'
import '../App.css'
import allMatches from '../allMatches'
import data from '../allMatches'

const Prediction = () => {
  return (
    <>
      <div className="Predict-container">
        <h1> Mon tableau de données</h1>
        <CollapsibleTable data={data} />
      </div>
    </>
  )
}

export default Prediction
