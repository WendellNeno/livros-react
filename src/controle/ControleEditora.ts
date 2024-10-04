
import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Globo' },
    { codEditora: 2, nome: 'Editora Abril' },
    { codEditora: 3, nome: 'Companhia das Letras' }
];

export class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.find((editora) => editora.codEditora === codEditora);
        return editora ? editora.nome : 'Editora não encontrada';
    }
}
