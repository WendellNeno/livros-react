import React, { useState, useEffect } from 'react';
import { LinhaLivro } from '../components/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css';
import { Menu } from '../components/Menu';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivros = async () => {
        const resposta = await fetch(baseURL);
        const data = await resposta.json();
        setLivros(data);
        setCarregado(true);
    };

    const excluirLivro = async (codigo: number) => {
        await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
        setCarregado(false); // Recarrega a lista após exclusão
    };

    useEffect(() => {
        if (!carregado) {
            obterLivros();
        }
    }, [carregado]);

    return (
        <div className={styles.container}>
            <Menu />
            <main className={styles.main}>
                <h1>Lista de Livros</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
