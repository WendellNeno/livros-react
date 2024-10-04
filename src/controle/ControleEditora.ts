import { Editora } from "../modelo/Editora";

class ControleEditora {
    private editoras: Array<Editora> = [
        new Editora(1, "Editora Globo"),
        new Editora(2, "Editora Abril"),
        new Editora(3, "Companhia das Letras")
    ];

    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.find(editora => editora.codEditora === codEditora);
        return editora ? editora.nome : undefined;
    }
}

export default ControleEditora;
