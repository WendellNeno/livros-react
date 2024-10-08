import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    Livros
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Listar Livros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/LivroDados">
                                Cadastrar Livro
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
