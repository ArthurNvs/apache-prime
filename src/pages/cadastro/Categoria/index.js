import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
      const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://apache-prime.herokuapp.com/categorias';
      fetch(URL).then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
});

  return (
    <PageTemplate>
      <h1>
        Cadastrar Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        console.log('enviando form');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(initialValues);
      }}
      >

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
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button>Salvar</Button>
      </form>

      {categorias.length === 0 && (
          <div>
              CARREGANDO LISTA...
          </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          if (!categoria.nome) { return []; }

          return (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <br />
      <br />
      <Link to="/">
        Home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
