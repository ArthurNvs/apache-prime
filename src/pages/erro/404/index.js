import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function Erro404(){
    return(
        <PageTemplate>
            <h1>ERRO 404</h1>

            <div>
                <p>Algo deu errado e fomos parar onde não deveríamos... clica aqui em baixo pra voltar pra home (:</p>
            </div>

            <Link to="/">
                Home
            </Link>
        </PageTemplate>
    );

}

export default Erro404;