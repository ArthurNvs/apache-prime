import React, { useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageTemplate>
            <h1>Cadastrar Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                console.log('enviando form');
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="nome da categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}

                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}

                />

                <FormField
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}

                />

                {/* <div>
                    <label>
                        Cor: <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        /> <br /><br />
                    </label>
                </div> */}

                {/* <div>
                    <label>
                        Descrição: <textarea
                            type="text"
                            name="descricao"
                            onChange={handleChange}
                        /> <br /><br />
                    </label>
                    <label>
                        Usuário: <input type="text" /> <br /><br />
                    </label>
                </div> */}
                <br /><br />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <br /><br />

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