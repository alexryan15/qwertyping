import './App.css'
import Navbar from './components/Navbar/Navbar'
import TypingArea from './components/TypingArea/TypingArea'

function App() {

  return (
    <div className="App">
      <Navbar />
      <TypingArea text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet repellendus, delectus animi unde recusandae autem quis quam, architecto pariatur eius aliquam ipsa saepe labore! Itaque sunt numquam in velit ducimus?" />
    </div>
  )
}

export default App
