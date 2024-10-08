import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from './index'; // Certifique-se de que o controleLivro está sendo importado corretamente

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const codigo = Number(req.query.codigo); // Extrair o código do livro da URL
            if (!codigo) {
                res.status(400).json({ mensagem: 'Código inválido' });
                return;
            }
            controleLivro.excluir(codigo); // Excluir o livro usando o controlador
            res.status(200).json({ mensagem: 'Livro excluído com sucesso!' });
        } else {
            res.status(405).json({ mensagem: 'Método não permitido' }); // Tratamento para métodos não permitidos
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro no servidor', error });
    }
};
