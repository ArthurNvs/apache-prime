import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="ApachePrime logo" />
      </a>
      <p>
        Arthur Neves (theApache) made with tea, chocolats and love <span role="img" aria-label="tea">☕︎</span> <br />
        {' '}
        <a href="https://www.alura.com.br/imersao-react/">
          #ImersãoReact
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
