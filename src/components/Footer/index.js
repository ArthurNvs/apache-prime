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
        Projeto de Arthur Neves (theApache) feito com chá, chocolate e amor (: <br />
        {' '}
        <a href="https://www.alura.com.br/">
          #Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
