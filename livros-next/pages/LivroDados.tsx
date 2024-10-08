import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css';
import { Menu } from '../components/Menu';

const baseURL = "http://localhost:3000/api/livros";
const controleEditora = new ControleEditora();

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(e.target.value));
    };

    const incluirLivro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const livro: Livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n')
        };
        await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <Menu />
            <main className={styles.main}>
                <h1>Cadastro de Livro</h1>
                <form onSubmit={incluirLivro}>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Resumo</label>
                        <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Autores (separados por linha)</label>
                        <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Editora</label>
                        <select className="form-select" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;
