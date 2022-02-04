const { Database } = require("sqlite3");

/* inserirRota('/buscar_usuario',
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

    }) */


inserirRota('/ver_usuario',
    function(dados, resposta) {
        console.log(dados);

        /* if (!dados.nome) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        if (!dados.nickname) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        } */

        database(`INSERT INTO CARRO VALUES
        (
         "${dados.id}",
         "${dados.nome}",
         "${dados.placa}",
         "${dados.marca}",
         "${dados.modelo}"
        )`)
            .then(result => {
                console.log('Carro inserido');
                resposta({ message: 'Carro inserido com sucesso!' })
            }).catch(erro => {
                console.log('Erro ao inserir o carro');
                resposta({ erro: 'Erro ao inserir o carro!' })
            });

    })


inserirRota('/selecionar_usuario',
    function(dados, resposta) {
        console.log(dados);

        /* if (!dados.nome) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        if (!dados.nickname) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        } */

        database(`SELECT * FROM CARRO`)
            .then(result => {
                console.log('Carro selecionado');
                resposta({ message: 'Carro selecionado com sucesso!' })
            }).catch(erro => {
                console.log('Erro ao selecionar o carro');
                resposta({ erro: 'Erro ao selecionar o carro!' })
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


/* fetch('http://localhost:3000/api/ver_usuario', {
    method: 'POST',
    body: JSON.stringify({
        id: 1,
        nome: 'UP',
        placa: 'LSN4I49',
        marca: 'volkswagen',
        modelo: '170 tsi'
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})


fetch('http://localhost:3000/api/selecionar_usuario', {
    method: 'POST',
}) */