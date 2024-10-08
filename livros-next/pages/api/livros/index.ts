import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

// Aqui fazemos a exportação correta de controleLivro
export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(200).json({ mensagem: 'Livro incluído com sucesso!' });
        } else {
            res.status(405).send('Método não permitido');
        }
    } catch (error) {
        res.status(500).send('Erro no servidor');
    }
};
