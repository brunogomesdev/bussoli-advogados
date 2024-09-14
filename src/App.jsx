import { useState } from 'react'
import logoBussoli from './assets/logo-bussoli.png'
import destaqueBussoli from './assets/destaque.jpg'
import logoLampada from './assets/logo-cabecadelampada.png'
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
        <div className="atuacao-titulo">
          Áreas de Atuação
        </div>
        <div className="atuacao">
          <div className="atuacao-list">
            <p>Cível</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Empresarial</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Imobiliário</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Família e Sucessões</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Consumidor</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Criminal</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Trabalhista</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Desportiva</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
          <div className="atuacao-list">
            <p>Tributária</p>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          </div>
        </div>
      </div>

      <div className="main-parceiros">
        <div className="parceiros">
          <p className="tit-parceiros">Parceiros</p>
          <p className="txt-parceiros">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

      <div className="main-advogados">
        <div className="advogados-titulo">
          Advogados
        </div>
        <div className="advogados">
          <div className="advogados-list">
            <p>Evandro Colombo Bussoli</p>
            <div>OAB/SP 324.402</div>
          </div>
          <div className="advogados-list">
            <p>Heraldo Goreti Bussoli</p>
            <div>OAB/SP 154.296</div>
          </div>
        </div>
      </div>

      <div className="main-contato">
        <div className="contato">
          <p className="tit-contato">Contato</p>
          <p className="txt-contato">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
        </div>
      </div>

      <div className="main-rodape">
        <div className="rodape">
          <div className="logo">
            <p>Site desenvolvido por:</p>
            <a href="https://vitejs.dev" target="_blank">
              <img src={logoLampada} className="logo" alt="Vite logo" />
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
