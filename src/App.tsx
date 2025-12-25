import { useState, useEffect } from 'react'
import './styles/index.scss'
import LoadingScreen from './components/LoadingScreen'
import MuseumHallway from './components/MuseumHallway'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  console.log('App rendered, isLoading:', isLoading)

  useEffect(() => {
    console.log('Setting up loading timer')
    const timer = setTimeout(() => {
      console.log('Timer fired, hiding loading screen')
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <LoadingScreen isLoading={isLoading} />
      <MuseumHallway />
    </div>
  )
}

export default App
