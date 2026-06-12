import './App.css'
import { FiMoon } from "react-icons/fi";

function App() {
  return (
    <>
      <section className="caixa">
        <div className='header'>
          <div className='nome'><h2>Gionata Disconzi</h2></div>

          <div className='header2'>
            <p>Home</p>
            <p>Sobre</p>
            <p>Tecnologias</p>
            <p>Progetos</p>
            <p>Contato</p>
            <FiMoon size={18} />
          </div>

        </div>
      </section>
    </>
  )
}

export default App