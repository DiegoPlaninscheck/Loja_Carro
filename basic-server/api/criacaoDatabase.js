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
    NOME varchar(30) not null,
    SENHA varchar(10) not null,
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
    console.log('Tabela CLINTE criada com sucesso');
}).catch(erro => {
    console.log('Tabela CLIENTE com erro de criação');
});