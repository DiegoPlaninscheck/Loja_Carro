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

// inserirRota('/checar_pessoa', function(dados, resposta) {
//     database(`SELECT * FROM PESSOA`)
//         .then(result => {
//             let list = [];
//             for (i = 0; i < result.length; i++) {
//                 let nome = result[i].NOME;
//                 let senha = result[i].SENHA;

//                 newList = {
//                     nome: nome,
//                     senha: senha
//                 }
//                 list.push(newList);
//             }
//             console.log(list)
//             resposta(list)
//         }).catch(erro => {
//             console.log('DEU RUIM', erro)
//             resposta({ erro })
//         })
// })

inserirRota('/checar_pessoa', function(dados, resposta) {
database(`SELECT * FROM PESSOA WHERE NOME = "${dados.NOME}" AND SENHA = "${dados.SENHA}"`)
    .then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('DEU RUIM')
        resposta({erro})
    })
})

inserirRota('/pessoa', function(dados, resposta) {
    database(`SELECT * FROM PESSOA`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('DEU RUIM')
            resposta({erro})
        })
    })

inserirRota('/cadastrar', function(dados, resposta) {
    database(`INSERT INTO PESSOA VALUES(null, "${dados.NOME}", "${dados.SENHA}", "${dados.SOBRENOME}", "${dados.NASCIMENTO}", "${dados.EMAIL}", null, "${dados.ENDERECO_CODIGO}")`)
    .then(result => {
        resposta(result);
    }).catch(erro => {
        console.log('Deu ruim')
        resposta({erro})
    })
})

inserirRota('/carro', function(dados, resposta) {
    database(`INSERT INTO CARRO VALUES(null, "${dados.NOME}", "${dados.PLACA}", "${dados.MARCA}", "${dados.MODELO}", "${dados.VALOR}", "${dados.IMAGEM}")`)
    .then(result => {
        resposta({message: "Cadastrado com sucesso"});
    }).catch(erro => {
        resposta({erro: "Erro ao cadastrar"})
    })
})

inserirRota('/editar_carro', function(dados, resposta) {
    database(`UPDATE CARRO SET NOME = "${dados.NOME}", PLACA = "${dados.PLACA}", MARCA = "${dados.MARCA}", MODELO = "${dados.MODELO}", VALOR = "${dados.VALOR}", IMAGEM = "${dados.IMAGEM}"
    where ID = "${dados.ID}"`)
    .then(result => {
        resposta({message: "Editado com sucesso"});
    }).catch(erro => {
        resposta({erro: "Erro ao editar"})
    })
})

inserirRota('/endereco', function(dados, resposta) {
    database(`INSERT INTO ENDERECO VALUES(null, "${dados.PAIS}", "${dados.ESTADO}", "${dados.CIDADE}", "${dados.CEP}")`)
    .then(result => {
        resposta(result);
    }).catch(erro => {
        console.log('Deu ruim')
        resposta({erro})
    })
})

inserirRota('/endereco_listar',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENDERECO`)
            .then(result => {
                console.log('Listado');
                resposta(result)
            }).catch(erro => {
                resposta({erro})
            });

    })

    inserirRota('/pessoa_listar',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM PESSOA`)
            .then(result => {
                console.log('Listado');
                resposta(result)
            }).catch(erro => {
                resposta({erro})
            });

    })

    inserirRota('/comprador_listar',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM CLIENTE WHERE COMPRADOR = 1`)    
            .then(result => {
                console.log('Listado');
                resposta(result)
            }).catch(erro => {
                resposta({erro})
            });
    })

    inserirRota('/colocar_comprador', function(dados, resposta) {
        database(`UPDATE CLIENTE SET COMPRADOR = '${dados.COMPRADOR}' where NUMERO = ${dados.ID_PESSOA}`)
        .then(result => {
            resposta({message: "Editado com sucesso"});
        }).catch(erro => {
            resposta({erro: "Erro ao editar"})
        })
    })

    inserirRota('/produto_listar',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM PRODUTO WHERE CARRINHO = 1`)    
            .then(result => {
                console.log('Listado');
                resposta(result)
            }).catch(erro => {
                resposta({erro})
            });
    })

    inserirRota('/colocar_carrinho', function(dados, resposta) {
        database(`UPDATE PRODUTO SET CARRINHO = '${dados.CARRINHO}' where NUMERO = ${dados.ID_CARRO}`)
        .then(result => {
            resposta({message: "Editado com sucesso"});
        }).catch(erro => {
            resposta({erro: "Erro ao editar"})
        })
    })


inserirRota('/checar_carro', function(dados, resposta) {
    database(`SELECT * FROM CARRO`)
        .then(result => {
            let list = [];
            for (i = 0; i < result.length; i++) {
                let id = result[i].ID;
                let nome = result[i].NOME;
                let placa = result[i].PLACA;
                let marca = result[i].MARCA;
                let modelo = result[i].MODELO;
                let valor = result[i].VALOR;
                let imagem = result[i].IMAGEM;

                newList = {
                    id: id,
                    nome: nome,
                    placa: placa,
                    marca: marca,
                    modelo: modelo,
                    valor: valor,
                    imagem: imagem
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