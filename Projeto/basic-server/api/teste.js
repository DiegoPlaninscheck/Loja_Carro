inserirRota('/teste_busca_pessoa', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM CARRO').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_busca_carro', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM CARRO').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_busca_produto', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM PRODUTO').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_busca_cliente', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM CLIENTE').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_criar_tabela', (dados, resposta) => {
    console.log(dados);
    database(`CREATE TABLE IF NOT EXISTS TESTE (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        NUMERO int
        )`).then(result => {
        resposta({ resposta: 'TABELA CRIADA' });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_inserir_dados', (dados, resposta) => {
    console.log(dados);
    database(`INSERT INTO TESTE (NOME, NUMERO)
                VALUES ('NOME', 1)`).then(result => {
        resposta({ resposta: 'REGISTRO CRIADO' });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});