import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';


function CadastroVideo() {
    return (
        <PageTemplate>
            <h1>Cadastrar Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageTemplate>
    )
}

export default CadastroVideo;