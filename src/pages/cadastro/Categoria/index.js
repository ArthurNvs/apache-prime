import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroCategoria() {
    return (
        <PageTemplate>
            <h1>Cadastrar Categoria</h1>

            <form>
                <label>
                    Nome da Categoria: <input type="text" /> <br/><br/>
                </label>
                <label>
                    Cor: <input type="color" /> <br/><br/>
                </label>
                <label>
                    Descrição: <input type="text" /> <br/><br/>
                </label>
                <label>
                    Usuário: <input type="text" /> <br/><br/>
                </label>
                <br/><br/>
                <button> Cadastrar</button>
            </form>
            <br/><br/>

            <Button as={Link} className="ButtonLink" to="/">
                Salvar
            </Button>

            <Button as={Link} className="ButtonLink" to="/">
                Limpar
            </Button>

            <br /><br />
            <Link to="/">
                Home
            </Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;