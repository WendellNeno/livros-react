import { Livro } from "../modelo/Livro";

class ControleLivro {
    private livros: Array<Livro> = [
        new Livro(1, 1, "O Pequeno Príncipe", "Um piloto se encontra perdido no deserto e conhece um jovem príncipe", ["Antoine de Saint-Exupéry"]),
        new Livro(2, 2, "Dom Casmurro", "A história de Bentinho e Capitu, e as dúvidas sobre sua fidelidade", ["Machado de Assis"]),
        new Livro(3, 3, "A Metamorfose", "A transformação de um homem em um inseto e as consequências em sua vida", ["Franz Kafka"])
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(novoLivro: Livro): void {
        const maiorCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0);
        novoLivro.codigo = maiorCodigo + 1; // Atribui o próximo código disponível
        this.livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1); // Remove o livro do array
        }
    }
}

export default ControleLivro;