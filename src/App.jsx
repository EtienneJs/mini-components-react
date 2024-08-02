import './App.css'
import { ExpandingCards } from './challenge/01/Expanding-cards'
import { ProgessSteps } from './challenge/02/ProgessSteps'

function App() {
  return (
    <>
        <section >
          <h1 style={{ paddingBottom:"5px", overflow:"hidden" }}>Expanding Cards</h1>
            <ExpandingCards/>
        </section>  
        <section >
          <h1 style={{ paddingBottom:"5px", overflow:"hidden" }}>Progress Steps</h1>
          <ProgessSteps/>
        </section>  
    </>
  )
}

export default App
