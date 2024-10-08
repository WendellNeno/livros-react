import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'O Pequeno Príncipe', resumo: 'Um piloto se encontra perdido no deserto e conhece um jovem príncipe', autores: ['Antoine de Saint-Exupéry'] },
    { codigo: 2, codEditora: 2, titulo: 'Dom Casmurro', resumo: 'A história de Bentinho e Capitu, e as dúvidas sobre sua fidelidade', autores: ['Machado de Assis'] },
    { codigo: 3, codEditora: 3, titulo: 'A Metamorfose', resumo: 'A transformação de um homem em um inseto e as consequências em sua vida', autores: ['Franz Kafka'] }
];

export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const codigoNovo = Math.max(...livros.map((l) => l.codigo)) + 1;
        livro.codigo = codigoNovo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex((livro) => livro.codigo === codigo);
        if (index >= 0) {
            livros.splice(index, 1);
        }
    }
}
