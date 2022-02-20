database(`CREATE TABLE IF NOT EXISTS CARRO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null UNIQUE,
    PLACA char(7) not null UNIQUE,
    MARCA varchar(30) not null,
    MODELO varchar(30) not null UNIQUE,
    VALOR float not null 
    )`).then(result => {
    console.log('Tabela CARRO criada com sucesso');
}).catch(erro => {
    console.log('Tabela CARRO com erro de criação');
});


// database(`INSERT INTO CARRO VALUES
// (null, 'UP', 'BRA2E19', 'Volkswagem', '170 tsi', 70000),
// (null, 'TCROSS', 'BRA2E20', 'Volkswagem', '200 tsi', 180000),
// (null, 'JETTA', 'BRA2E21', 'Volkswagem', '350 tsi', 220000),
// (null, 'R8', 'BRA2E22', 'AUDI', 'R8', 750000),
// (null, 'X1', 'BRA2E23', 'BMW', 'X1', 250000),
// (null, 'Equinox', 'BRA2E24', 'Chevrolet', 'Premier', 220000),
// (null, 'Mustang', 'BRA2E25', 'Ford', 'Shelby GT500', 1600000),
// (null, 'Civic', 'BRA2E26', 'Honda', 'Touring', 180000),
// (null, 'Compass', 'BRA2E27', 'JEEP', 'Limited', 200000),
// (null, 'GTR Skyline', 'BRA2E28', 'Nissan', 'R35', 800000)`)
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


database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    ID_PESSOA INTEGER NOT NULL,
    FOREIGN KEY(ID_PESSOA)
    REFERENCES PESSOA(ID)
    )`).then(result => {
    console.log('Tabela CLIENTE criada com sucesso');
}).catch(erro => {
    console.log('Tabela CLIENTE com erro de criação');
});

// database(`INSERT INTO CLIENTE VALUES
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