import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://apache-prime.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      })

  }, []);

  return (
    <PageTemplate>
      <h1>
        {'Cadastrar '}
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        console.log('enviando form');
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
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

        <Button
          as="input"
          type="submit"
          value="Salvar"
        />
      </form>

      {categorias.length === 0 && (
        <div>
          CARREGANDO LISTA...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          if (!categoria.titulo) { return []; }

          return (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
              {categoria.descricao}
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
