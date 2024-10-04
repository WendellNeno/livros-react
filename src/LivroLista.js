import React, { useState, useEffect } from 'react';
import ControleLivro from './ControleLivros'; // Supondo que o controlador esteja no mesmo diretório
import ControleEditora from './ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <button onClick={() => excluir(livro.codigo)} style={{marginLeft: "10px"}}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Forçar o redesenho
  };

  return (
    <main>
      <h1>Listagem de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Código</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
