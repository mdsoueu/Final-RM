import React, { useState } from 'react'

const Paginacao = ({ paginaAtual, totalPaginas, onPageChange }) => {
    // onPageChange - componente que atualiza para próxima página ou página anterior.

    // quando clico no botão, volta uma página;
    const handlePrevPage = () => {
        if (paginaAtual > 1) {
            onPageChange(paginaAtual - 1);
        }
    };

    // quando clico no botão avanço uma página;
    const handleNextPage = () => {
        if (paginaAtual < totalPaginas) {
            onPageChange(paginaAtual + 1);
        }
    };

    return (
        <div className="paginacao">
            <div className="botaoPag">
                {/* disabled={paginaAtual === 1} = desabilita o botão "anterior" quando já estou na primeira página */}
                <button onClick={handlePrevPage} disabled={paginaAtual === 1}> Anterior </button>
            </div>

            <span>{paginaAtual} de {totalPaginas}</span>

            <div className="botaoPag">
                {/* motra o número da minha página (a atual) de 42 págs */}
                <button onClick={handleNextPage} disabled={paginaAtual === totalPaginas}> Próxima </button>
            </div>
        </div>
    )
}

export default Paginacao