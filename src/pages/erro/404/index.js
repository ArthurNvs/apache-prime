import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function Erro404(){
    return(
        <PageTemplate>
            <h1>ERRO 404</h1>

            <iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="500" height="550" title="jogo"></iframe>

            <div>
                <p>Algo deu errado e fomos parar onde não deveríamos... clica <Link to="/">aqui</Link> pra voltar pra home (:</p>
            </div>

        </PageTemplate>
    );
}

export default Erro404;