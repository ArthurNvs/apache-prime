import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';


function CadastroVideo() {
    return (
        <PageTemplate>
            <h1>Cadastrar Vídeo</h1>

            <form>
                <label>
                    Título: <input type="text" /> <br /><br />
                </label>
                <label>
                    Link do vídeo: <input type="text" /> <br /><br />
                </label>
                <label>
                    Link da imagem do vídeo: <input type="text" /> <br /><br />
                </label>
                <label>
                    Categoria: <input type="select" /> <br /><br />
                </label>
                <label>
                    Descrição: <input type="text" /> <br /><br />
                </label>
                <label>
                    Usuário: <input type="text" /> <br /><br />
                </label>
                <br /><br />
                <button> Cadastrar</button>
            </form>
            <br /><br />

            <Button as={Link} className="ButtonLink" to="/">
                Salvar
            </Button>

            <Button as={Link} className="ButtonLink" to="/">
                Limpar
            </Button>

            <br /><br />

            <Link to="/cadastro/categoria">
                Cadastrar Nova Categoria
            </Link>
        </PageTemplate>
    )
}

export default CadastroVideo;