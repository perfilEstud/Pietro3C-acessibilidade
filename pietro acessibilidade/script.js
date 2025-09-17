/* Definindo o modo normal */
body {
    background-color: white;
    color: black;
    font-size: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease;
}

/* Modo de alto contraste */
body.alto-contraste {
    background-color: black;
    color: white;
}

/* Estilos dos botões */
#alterna-contraste, #aumentar-fonte, #diminuir-fonte {
    cursor: pointer;
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    transition: transform 0.2s ease, background-color 0.3s;
}

#alterna-contraste:hover, #aumentar-fonte:hover, #diminuir-fonte:hover {
    background-color: #dcdcdc;
}

#alterna-contraste.ativo {
    transform: rotate(180deg);
}

#botao-acessibilidade {
    /* Estilo do botão de menu de acessibilidade */
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

/* Estilos adicionais para visualização */
#opcoes-acessibilidade {
    display: none;
    list-style: none;
}

#opcoes-acessibilidade.apresenta-lista {
    display: block;
}
