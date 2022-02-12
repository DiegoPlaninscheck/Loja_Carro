database(`CREATE TABLE IF NOT EXISTS CARRO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null,
    PLACA char(7) not null,
    MARCA varchar(30) not null,
    MODELO varchar(30) not null
    )`).then(result => {
    console.log('Tabela CARRO criada com sucesso');
}).catch(erro => {
    console.log('Tabela CARRO com erro de criação');
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_CARRO INTEGER NOT NULL, 
    FOREIGN KEY(ID_CARRO)
    REFERENCES CARRO(ID)
    )`).then(result => {
    console.log('Tabela PRODUTO criada com sucesso');
}).catch(erro => {
    console.log('Tabela PRODUTO com erro de criação');
});


database(`CREATE TABLE IF NOT EXISTS PESSOA (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null UNIQUE,
    SENHA varchar(10) not null UNIQUE,
    SOBRENOME varchar(30) not null, 
    NASCIMENTO date,
    EMAIL varchar(50)
    )`).then(result => {
    console.log('Tabela PESSOA criada com sucesso');
}).catch(erro => {
    console.log('Tabela PESSOA com erro de criação');
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_PESSOA INTEGER NOT NULL,
    FOREIGN KEY(ID_PESSOA)
    REFERENCES PESSOA(ID)
    )`).then(result => {
    console.log('Tabela CLIENTE criada com sucesso');
}).catch(erro => {
    console.log('Tabela CLIENTE com erro de criação');
});

// database(`INSERT INTO PESSOA VALUES 
// (null, 'Diego', '123', 'Planinscheck', null, 'dieguinhodobarulho@hotmail.com'),
// (null, 'João', '321', 'Meireles', null, 'joaozinhogameplays@gmail.com.br'),
// (null, 'Camilly', 'camis', 'Pessotti', null, 'camillyzada@gmail.com'),
// (null, 'Bruna', 'brunas', 'Mafra', null, 'bruninha@gmail.com'),
// (null, 'Henrique', 'henri', 'Cole', null, 'henricole@gmail.com'),
// (null, 'Vinicius', 'vini12', 'Bonatti', null, 'vinibonatti@gmail.com'),
// (null, 'Leonardo', 'leo', 'Rafaelli', null, 'leorafaelli@gmail.com'),
// (null, 'Thiago', 'thiagao12', 'Braga', null, 'thiagobraga@gmail.com'),
// (null, 'Romário', 'romas', 'Hornburg', null, 'romasdeus@gmail.com'),
// (null, 'Gustavo', 'gusta', 'Rebelatto', null, 'gustarebelatto@gmail.com')`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });

database(`
        CREATE TABLE IF NOT EXISTS USER(
            NOME varchar(30),
            NICKNAME varchar(30),
            PASSWORD varchar(30)
        )
        `).then(result => {
    console.log('Tabela USER criada com sucesso');
}).catch(erro => {
    console.log('Tabela USER com erro de criação');
});