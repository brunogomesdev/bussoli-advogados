import { useState } from 'react'
import logoBussoli from './assets/logo-bussoli.png'
import destaqueBussoli from './assets/destaque.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-header">
        <div className="header">
          <div className="logo">
            <a href="https://vitejs.dev" target="_blank">
              <img src={logoBussoli} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div className="menu">
            <div className="menu-itens">PRINCIPAL</div>
            <div className="menu-itens">ATUAÇÃO</div>
            <div className="menu-itens">PARCEIROS</div>
            <div className="menu-itens">ADVOGADOS</div>
            <div className="menu-itens">CONTATO</div>
          </div>
        </div>
      </div>

      <div className="main-destaque">
        <div className="destaque">
          <img src={destaqueBussoli} className="img-destaque" alt="Destaque Bussoli Advogados e Associados" />
        </div>
      </div>

      <div className="main-atuacao">
        <div className="atuacao">
          <div className="atuacao-list">
            <p>Atuação 01</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="atuacao-list">
            <p>Atuação 02</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="atuacao-list">
            <p>Atuação 03</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="atuacao-list">
            <p>Atuação 04</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="atuacao-list">
            <p>Atuação 05</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="atuacao-list">
            <p>Atuação 06</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>

      <div className="main-parceiros">
        <div className="parceiros">
          <p className="tit-parceiros">Parceiros</p>
          <p className="txt-parceiros">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
        </div>
      </div>

      <div className="main-advogados">
        <div className="advogados">
          <p className="tit-advogados">Advogados</p>
          <p className="txt-advogados">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
        </div>
      </div>

      <div className="main-contato">
        <div className="contato">
          <p className="tit-contato">Contato</p>
          <p className="txt-contato">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
        </div>
      </div>

    </>
  )
}

export default App
