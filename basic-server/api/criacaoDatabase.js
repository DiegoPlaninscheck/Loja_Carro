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
// (null, 'Up', 'BRA2E19', 'Volkswagem', '170 tsi', 70000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallha.com%2Fwallpaper%2Fvehicles-volkswagen-up-1232747&psig=AOvVaw3c4FdgUM9123bsiOzVXEkf&ust=1647202570446000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJif7oGywfYCFQAAAAAdAAAAABAD.png'),
// (null, 'Tcross', 'BRA2E20', 'Volkswagem', '200 tsi', 180000 , 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carpixel.net%2Fpt%2Fwallpapers%2F16282%2F2019-volkswagen-t-cross.html&psig=AOvVaw1ehGS2y2CxJ4xpPt3aKaJH&ust=1647202644849000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDT95qywfYCFQAAAAAdAAAAABAJ.png'),
// (null, 'Jetta', 'BRA2E21', 'Volkswagem', '350 tsi', 220000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F562907%2Fz7119.8%2F1920x1080&psig=AOvVaw2MtluPpfLp0kzGK8TzMAFC&ust=1647202684685000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDe66mywfYCFQAAAAAdAAAAABAD.png'),
// (null, 'R8', 'BRA2E22', 'AUDI', 'R8', 750000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F562170%2Fz4058.3%2F1920x1080&psig=AOvVaw0ll3JnXwUKsrpLdKvuvpKo&ust=1647202703873000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiUmrOywfYCFQAAAAAdAAAAABAJ.png'),
// (null, 'X1', 'BRA2E23', 'BMW', 'X1', 250000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.press.bmwgroup.com%2Fbrazil%2Fvideo%2Fdetail%2FPF0008071%2Fbmw-x1-m-sport-25-anos&psig=AOvVaw280WI3wdJp9kS4a3EHHxLw&ust=1647202722142000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDynr2ywfYCFQAAAAAdAAAAABAU.png'),
// (null, 'Equinox', 'BRA2E24', 'Chevrolet', 'Premier', 220000, ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fmotor1.uol.com.br%2Freviews%2F140415%2Fexclusivo-ja-andamos-no-chevrolet-equinox-confirmado-oficialmente-para-o-brasil%2F&psig=AOvVaw30n4Lhfa_envELmHkFVxj0&ust=1647202763002000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDYvtGywfYCFQAAAAAdAAAAABAD.png'),
// (null, 'Mustang', 'BRA2E25', 'Ford', 'Shelby GT500', 1600000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F566439%2Fz10040.5%2F1920x1080&psig=AOvVaw1tqI4JyJsVRqnGgfLxcKE6&ust=1647202786515000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKisydqywfYCFQAAAAAdAAAAABAT.png'),
// (null, 'Civic', 'BRA2E26', 'Honda', 'Touring', 180000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.1zoom.me%2Fpt%2Fwallpaper%2F530152%2Fz1948.1%2F1920x1080&psig=AOvVaw04d19UkTdFQvvyqMbut1fa&ust=1647202820759000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDp5eqywfYCFQAAAAAdAAAAABAJ.png'),
// (null, 'Compass', 'BRA2E27', 'JEEP', 'Limited', 200000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmotor1.uol.com.br%2Fnews%2F464728%2Fjeep-compass-2022-oficial-india%2F&psig=AOvVaw1g4IPBTltF6iBxKgZWbU0r&ust=1647202850691000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC7t5WzwfYCFQAAAAAdAAAAABAQ.png'),
// (null, 'GTR Skyline', 'BRA2E28', 'Nissan', 'R35', 800000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.best-wallpaper.net%2FNissan-GT-R-R35-white-car-front-view_wallpapers.html&psig=AOvVaw2HsmxT3D8cZapRgR3z8NYI&ust=1647202974156000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC8vrezwfYCFQAAAAAdAAAAABAO.png')`)
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