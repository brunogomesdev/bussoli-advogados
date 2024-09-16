import { useState } from 'react'
import React, { useRef } from 'react';
import logoBussoli from './assets/logo-bussoli.png'
import destaqueBussoli from './assets/destaque.jpg'
import imgMapa from './assets/mapa.jpg'
import logoLampada from './assets/logo-cabecadelampada.png'
import logoInsta from './assets/instagram.png'
import emailjs from 'emailjs-com';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const
      templateParams = {
        from_name: name,
        from_email: email,

        message: message,
      };

    emailjs.send(
      'service_meopeyv',
      'template_uplkxq9',
      templateParams,
      'QFWOPnNvYC3XRH5xU'
    )
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
        // Mensagem de sucesso para o usuário
      })
      .catch((error) => {
        console.log(error.text);
        alert("Mensagem não enviada!");
        // Mensagem de erro para o usuário
      });
  }

  const destaqueRef = useRef(null);
  const atuacaoRef = useRef(null);
  const parceirosRef = useRef(null);
  const advogadosRef = useRef(null);
  const contatoRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="main-header">
        <div className="header">
          <div className="logo">
            <img src={logoBussoli} className="logo" alt="Logo - Bussoli Advogados Associados" />
          </div>
          <div className="menu">
            <ul>
              {/* <li><a href="#" onClick={() => handleClick(destaqueRef)} className="menu-itens">PRINCIPAL</a></li> */}
              <li><a href="#" onClick={() => handleClick(atuacaoRef)} className="menu-itens">ATUAÇÃO</a></li>
              <li><a href="#" onClick={() => handleClick(parceirosRef)} className="menu-itens">PARCEIROS</a></li>
              <li><a href="#" onClick={() => handleClick(advogadosRef)} className="menu-itens">ADVOGADOS</a></li>
              <li><a href="#" onClick={() => handleClick(contatoRef)} className="menu-itens">CONTATO</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="main-destaque" ref={destaqueRef}>
        <div className="destaque">
          <img src={destaqueBussoli} className="img-destaque" alt="Destaque Bussoli Advogados e Associados" />
        </div>
      </section>

      <section id="main-atuacao" ref={atuacaoRef}>
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
      </section>

      <section id="main-parceiros" ref={parceirosRef}>
        <div className="parceiros">
          <p className="tit-parceiros">Parceiros</p>
          <p className="txt-parceiros">Nossa equipe de advogados é composta por profissionais altamente qualificados e especializados em diversas áreas do Direito. Além disso, contamos com uma rede de parceiros estratégicos, escritórios e profissionais renomados em seus respectivos campos. Essa parceria nos permite oferecer aos nossos clientes soluções jurídicas completas e personalizadas, com a mais alta qualidade e eficiência. Ao unirmos nossos conhecimentos e experiências, garantimos que cada caso seja analisado de forma integral e estratégica, buscando sempre o melhor resultado para nossos clientes.</p>
        </div>
      </section>

      <section id="main-advogados" ref={advogadosRef}>
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
      </section>

      <section id="main-contato" ref={contatoRef}>
        <div className="tit-contato">CONTATOS</div>
        <div className="contato">
          <div className="contato-mapa">
            <img src={imgMapa} className="mapa" alt="Mapa Escritório" />
          </div>
          <div className="contato-dados">
            <p className="txt-contato txt-titulo">Nosso Endereço</p>
            <p className="txt-contato txt-endereco">Rua Cláudio Soares, 72, 11º andar, conjunto nº 1116, Pinheiros</p>
            <p className="txt-contato txt-endereco2">São Paulo - SP, CEP: 05422-030</p>
            <p className="txt-contato txt-telefone"><b>Telefone:</b> (11) 91023-9207</p>
            <p className="txt-contato txt-email"><b>E-mail:</b> <a href="mailto:evandrobussoli@adv.oabsp.org.br">evandrobussoli@adv.oabsp.org.br</a></p>

            <div className="contato-form">
              <div className="contato-form-tit">Entre em contato conosco</div>
              <form onSubmit={sendEmail}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Enviar</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section id="main-rodape">
        <div className="rodape">
          <div className="logo-insta">
            <a href="https://www.instagram.com/bussoliadvogados" target="_blank">
              <img src={logoInsta} className="logo-rodape-insta" alt="Instagram" />
            </a>
          </div>
          <div className="logo-cabeca">
            <p>Criação e<br />Desenvolvimento:</p>
            <a href="https://www.instagram.com/clampada_1988/" target="_blank">
              <img src={logoLampada} className="logo-rodape" alt="Cabeça de Lâmpada" />
            </a>
          </div>

        </div>
      </section>

    </>
  )
}

export default App
