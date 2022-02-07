const { Database } = require("sqlite3");

/* inserirRota('/buscar_usuario',
    function(dados, resposta) {
        console.log(dados)

        resposta({ Ok: 'Resquisição efetuada com sucesso' })
    });
*/

inserirRota('/criar_usuario',
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


// inserirRota('/inserir_usuario',
//     function(dados, resposta) {
//         console.log(dados);

//         /* if (!dados.nome) {
//             return resposta({ erro: 'E necesarrio preencher o nome' })
//         }

//         if (!dados.nickname) {
//             return resposta({ erro: 'E necesarrio preencher o nome' })
//         } */

//         database(`INSERT INTO CARRO VALUES
//         (
//          "${dados.id}",
//          "${dados.nome}",
//          "${dados.placa}",
//          "${dados.marca}",
//          "${dados.modelo}"
//         )`)
//             .then(result => {
//                 console.log('Carro inserido');
//                 resposta({ message: 'Carro inserido com sucesso!' })
//             }).catch(erro => {
//                 console.log('Erro ao inserir o carro');
//                 resposta({ erro: 'Erro ao inserir o carro!' })
//             });

//     })


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

// fetch('/api/selecionar_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//         nickname: 'Diego',
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


//  fetch('/api/inserir_usuario', {
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