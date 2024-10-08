import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento) => {
        evento.preventDefault();
        const novoLivro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n')
        };
        controleLivro.incluir(novoLivro);
        navigate('/');
    };

    return (
        <main>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea 
                        className="form-control" 
                        value={resumo} 
                        onChange={(e) => setResumo(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (separados por linha)</label>
                    <textarea 
                        className="form-control" 
                        value={autores} 
                        onChange={(e) => setAutores(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select 
                        className="form-select" 
                        value={codEditora} 
                        onChange={tratarCombo}
                    >
                        {opcoes.map((editora) => (
                            <option key={editora.value} value={editora.value}>
                                {editora.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </main>
    );
};

export default LivroDados;
