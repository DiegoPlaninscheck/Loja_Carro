const { Database } = require("sqlite3");

inserirRota('/buscar_usuario',
    function(dados, resposta) {
        console.log(dados)

        resposta({ Ok: 'Resquisição efetuada com sucesso' })
    });


inserirRota('/criar_usuario',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.nome) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        if (!dados.nickname) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        database(`INSERT INTO USER 
        (
            NOME, 
            NICKNAME
        ) 
        VALUES
        (
         "${dados.nome}",
         "${dados.nickname}"
        )`)
            .then(result => {
                console.log('Usuario inserido');
                resposta({ message: 'Usuario inserido com sucesso!' })
            }).catch(erro => {
                console.log('Erro ao inserir o usuario');
                resposta({ erro: 'Erro ao inserir o usuario!' })
            });

    })

/* fetch('http://localhost:3000/api/criar_usuario', {
    method: 'POST',
    body: JSON.stringify({
        nome: 'Diego',
        nickname: 'frst157'
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}) */