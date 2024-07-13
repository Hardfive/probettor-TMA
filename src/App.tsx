import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import Prediction from './pages/Prediction'
import WebApp from '@twa-dev/sdk'

function App() {
  const navigate = useNavigate()
  const GoToPrediction = () => {
    navigate('/prediction')
  }
  const GoToCombine = () => {
    navigate('/combine')
  }
  return (
    <>
      <div>
        <h1 className="Brand">ProBettor AI</h1>
      </div>
      <h2>🔥Enflamé votre votre aventure de parieur</h2>
      <h2>Optimiser vos chances de succès 🏆</h2>
      <div className="card">
        <button onClick={GoToPrediction}>Get Prediction</button>
        <button onClick={GoToCombine}>Get Combiné</button>
      </div>
    </>
  )
}

export default App
