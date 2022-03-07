database(`CREATE TABLE IF NOT EXISTS CARRO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null UNIQUE,
    PLACA char(7) not null UNIQUE,
    MARCA varchar(30) not null,
    MODELO varchar(30) not null UNIQUE,
    VALOR float not null,
    IMAGEM varchar(30) not null 
    )`).then(result => {
    console.log('Tabela CARRO criada com sucesso');
}).catch(erro => {
    console.log('Tabela CARRO com erro de criação');
});


// database(`INSERT INTO CARRO VALUES
// (null, 'Up', 'BRA2E19', 'Volkswagem', '170 tsi', 70000, 'Up'),
// (null, 'Tcross', 'BRA2E20', 'Volkswagem', '200 tsi', 180000 , 'Tcross'),
// (null, 'Jetta', 'BRA2E21', 'Volkswagem', '350 tsi', 220000, 'Jetta'),
// (null, 'R8', 'BRA2E22', 'AUDI', 'R8', 750000, 'R8'),
// (null, 'X1', 'BRA2E23', 'BMW', 'X1', 250000, 'X1'),
// (null, 'Equinox', 'BRA2E24', 'Chevrolet', 'Premier', 220000, 'Equinox'),
// (null, 'Mustang', 'BRA2E25', 'Ford', 'Shelby GT500', 1600000, 'Mustang'),
// (null, 'Civic', 'BRA2E26', 'Honda', 'Touring', 180000, 'Civic'),
// (null, 'Compass', 'BRA2E27', 'JEEP', 'Limited', 200000, 'Compass'),
// (null, 'GTR Skyline', 'BRA2E28', 'Nissan', 'R35', 800000, 'R35')`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    ID_CARRO INTEGER NOT NULL, 
    FOREIGN KEY(ID_CARRO)
    REFERENCES CARRO(ID)
    )`).then(result => {
    console.log('Tabela PRODUTO criada com sucesso');
}).catch(erro => {
    console.log('Tabela PRODUTO com erro de criação');
});


// database(`INSERT INTO PRODUTO VALUES
// (null, 1),
// (null, 2),
// (null, 3),
// (null, 4),
// (null, 5),
// (null, 6),
// (null, 7),
// (null, 8),
// (null, 9),
// (null, 10)`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });


database(`CREATE TABLE IF NOT EXISTS ENDERECO(
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,  
    PAIS VARCHAR(45) NOT NULL,
    ESTADO VARCHAR(45) NOT NULL,
    CIDADE VARCHAR (45) NOT NULL,
    CEP CHAR(8) NOT NULL)`).then(result => {
console.log('Tabela ENDERECO criada com sucesso');
}).catch(erro => {
console.log('Tabela ENDERECO com erro de criação');
});


// database(`INSERT INTO ENDERECO VALUES 
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '12345678'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '87654321'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '18273645'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '81726354'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '1287465'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '87126345'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '12387654'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '87652134'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '76832145'),
// (null, 'Brasil', 'Santa Catarina', 'Jaraguá do Sul', '72635418')`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });


database(`CREATE TABLE IF NOT EXISTS PESSOA (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null UNIQUE,
    SENHA varchar(10) not null UNIQUE,
    SOBRENOME varchar(30) not null, 
    NASCIMENTO date,
    EMAIL varchar(50),
    ENDERECO_CODIGO INTERGER NOT NULL,
    FOREIGN KEY (ENDERECO_CODIGO)
    REFERENCES ENDERECO(CODIGO)
    )`).then(result => {
    console.log('Tabela PESSOA criada com sucesso');
}).catch(erro => {
    console.log('Tabela PESSOA com erro de criação');
});

// database(`INSERT INTO PESSOA VALUES 
// (null, 'Diego', '123', 'Planinscheck', null, 'dieguinhodobarulho@hotmail.com', 1),
// (null, 'João', '321', 'Meireles', null, 'joaozinhogameplays@gmail.com.br', 2),
// (null, 'Camilly', 'camis', 'Pessotti', null, 'camillyzada@gmail.com', 3),
// (null, 'Bruna', 'brunas', 'Mafra', null, 'bruninha@gmail.com', 4),
// (null, 'Henrique', 'henri', 'Cole', null, 'henricole@gmail.com', 5),
// (null, 'Vinicius', 'vini12', 'Bonatti', null, 'vinibonatti@gmail.com', 6),
// (null, 'Leonardo', 'leo', 'Rafaelli', null, 'leorafaelli@gmail.com', 7),
// (null, 'Thiago', 'thiagao12', 'Braga', null, 'thiagobraga@gmail.com', 8),
// (null, 'Romário', 'romas', 'Hornburg', null, 'romasdeus@gmail.com', 9),
// (null, 'Gustavo', 'gusta', 'Rebelatto', null, 'gustarebelatto@gmail.com', 10)`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });


database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    ID_PESSOA INTEGER NOT NULL,
    PRODUTO_NUMERO INTEGER NOT NULL,
    PRODUTO_CARRO_ID INTEGER NOT NULL,
    FOREIGN KEY(ID_PESSOA)
    REFERENCES PESSOA(ID),
    FOREIGN KEY(PRODUTO_NUMERO)
    REFERENCES PRODUTO(NUMERO),
    FOREIGN KEY(PRODUTO_CARRO_ID) 
    REFERENCES PRODUTO_ID_CARRO(ID)
    )`).then(result => {
    console.log('Tabela CLIENTE criada com sucesso');
}).catch(erro => {
    console.log('Tabela CLIENTE com erro de criação');
});

// database(`INSERT INTO CLIENTE VALUES
// (null, 1, 1, 1),
// (null, 2, 2, 2),
// (null, 3, 3, 3),
// (null, 4, 4, 4),
// (null, 5, 5, 5),
// (null, 6, 6, 6),
// (null, 7, 7, 7),
// (null, 8, 8, 8),
// (null, 9, 9, 9),
// (null, 10, 10, 10)`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });

// database(`
//         CREATE TABLE IF NOT EXISTS USER(
//             NOME varchar(30),
//             NICKNAME varchar(30),
//             PASSWORD varchar(30)
//         )
//         `).then(result => {
//     console.log('Tabela USER criada com sucesso');
// }).catch(erro => {
//     console.log('Tabela USER com erro de criação');
// });




database(`CREATE TABLE IF NOT EXISTS FORNECEDOR(
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, 
            NOME varchar(45) NOT NULL,
            EMAIL varchar(100) NOT NULL,
            ENDERECO_CODIGO INTEGER NOT NULL,
            PRODUTO_NUMERO INTEGER NOT NULL,
            PRODUTO_CARRO_ID INTEGER NOT NULL,
            FOREIGN KEY(ENDERECO_CODIGO) REFERENCES CODIGO(ENDERECO),
            FOREIGN KEY(PRODUTO_NUMERO) REFERENCES PRODUTO(CODIGO),
            FOREIGN KEY(PRODUTO_CARRO_ID) REFERENCES PRODUTO_CARRO_ID(ID))`).then(result => {
    console.log('Tabela FORNECEDOR criada com sucesso');
}).catch(erro => {
    console.log('Tabela FORNECEDOR com erro de criação');
});

database(`CREATE TABLE IF NOT EXISTS ESTOQUE(
            ID INTEGER NOT NULL PRIMARY KEY,
            PRODUTO_NUMERO INTEGER NOT NULL,
            PRODUTO_CARRO_ID INTEGER NOT NULL,
            FOREIGN KEY(PRODUTO_NUMERO)
            REFERENCES PRODUTO(NUMERO),
            FOREIGN KEY(PRODUTO_CARRO_ID)
            REFERENCES PRODUTO(ID_CARRO))`).then(result => {
    console.log('Tabela ESTOQUE criada com sucesso');
}).catch(erro => {
    console.log('Tabela ESTOQUE com erro de criação');
});