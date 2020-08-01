import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
    const history = useHistory();
    const { handleChange, values } = useForm({
        titulo: 'A Origem',
        url: 'https://www.youtube.com/watch?v=HiixbtN-O24',
        categoria: 'Filmes',
    });

    return (
        <PageTemplate>
            <h1>Cadastrar Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 4,
                }).then(() => {
                    history.push('/');
                    console.log('Sucesso ao cadastrar filme!')
                })

            }}>
                <FormField
                    label="Título do vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>
            <br />
            <br />

            <Link to="/cadastro/categoria">
                Cadastrar Nova Categoria
            </Link>
        </PageTemplate>
    );
}

export default CadastroVideo;
