const { Database } = require("sqlite3");

inserirRota('/buscar_usuario', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM USER').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

// fetch('/api/buscar_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//         nome: 'sim',
//         nickname: 'sim'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(function (result){
//     return result.json();
// }).then(function (dados){ 
//     console.log(dados);
// }).catch(function (erro){
//     console.log(erro)
// });



inserirRota('/inserir_usuario',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.nome) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        if (!dados.nickname) {
            return resposta({ erro: 'E necesarrio preencher o nome' })
        }

        if (!dados.password) {
            return resposta({ erro: 'E necesarrio preencher a senha' })
        }

        database(`INSERT INTO USER 
        (
            NOME, 
            NICKNAME,
            PASSWORD
        ) 
        VALUES
        (
         "${dados.nome}",
         "${dados.nickname}",
         "${dados.password}
        )`)
            .then(result => {
                console.log('Usuario inserido');
                resposta({ message: 'Usuario inserido com sucesso!' })
            }).catch(erro => {
                console.log('Erro ao inserir o usuario');
                resposta({ erro: 'Erro ao inserir o usuario!' })
            });

    })

// fetch('/api/inserir_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//           nome: 'Diego',
//         nickname: 'frst157',
//         password: '123'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(function (result){
//     return result.json();
// }).then(function (dados){ 
//     console.log(dados);
// }).catch(function (erro){
//     console.log(erro)
// });


inserirRota('/login',
    function(dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND
        PASSWORD = "${dados.password}" LIMIT 1`)
            .then(result => {
                console.log('USER selecionado');
                resposta({ user: result[0] })
            }).catch(erro => {
                resposta({ erro: 'Erro ao selecionar o USER!' })
            });

    })

inserirRota('/checar_pessoa', function(dados, resposta) {
    database(`SELECT * FROM PESSOA`)
        .then(result => {
            let list = [];
            for (i = 0; i < result.length; i++) {
                let nome = result[i].NOME;
                let senha = result[i].SENHA;

                newList = {
                    nome: nome,
                    senha: senha
                }
                list.push(newList);
            }
            console.log(list)
            resposta(list)
        }).catch(erro => {
            console.log('DEU RUIM', erro)
            resposta({ erro })
        })
})


inserirRota('/checar_carro', function(dados, resposta) {
    database(`SELECT * FROM CARRO`)
        .then(result => {
            let list = [];
            for (i = 0; i < result.length; i++) {
                let nome = result[i].NOME;
                let marca = result[i].MARCA;
                let modelo = result[i].MODELO;
                let valor = result[i].VALOR;

                newList = {
                    nome: nome,
                    marca: marca,
                    modelo: modelo,
                    valor: valor
                }
                list.push(newList);
            }
            console.log(list)
            resposta(list)
        }).catch(erro => {
            console.log('DEU RUIM', erro)
            resposta({ erro })
        })
})


// fetch('/api/inserir_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//         id: 1,
//         nome: 'UP',
//         placa: 'LSN4I49',
//         marca: 'volkswagen',
//         modelo: '170 tsi'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })