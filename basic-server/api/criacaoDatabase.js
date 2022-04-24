database(`CREATE TABLE IF NOT EXISTS CARRO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30) not null,
    PLACA varchar(7) not null UNIQUE,
    MARCA varchar(30) not null,
    MODELO varchar(30) not null,
    VALOR float not null,
    IMAGEM varchar(9999) not null 
    )`)
  .then((result) => {
    console.log("Tabela CARRO criada com sucesso");
  })
  .catch((erro) => {
    console.log("Tabela CARRO com erro de criação");
  });

// database(`INSERT INTO CARRO VALUES
// (null, 'Up', 'BRA2E19', 'Volkswagem', '170 tsi', 70000, 'https://w.wallha.com/ws/13/xgSPmvMJ.jpg'),
// (null, 'Tcross', 'BRA2E20', 'Volkswagem', '200 tsi', 180000 , 'https://revistacarro.com.br/wp-content/uploads/2020/08/vw-t-cross-2021-1.jpg'),
// (null, 'Jetta', 'BRA2E21', 'Volkswagem', '350 tsi', 220000, 'https://s1.1zoom.me/b4958/247/Volkswagen_2019_Jetta_GLI_35th_Anniversary_Grey_562907_1920x1080.jpg'),
// (null, 'R8', 'BRA2E22', 'AUDI', 'R8', 750000, 'https://s1.1zoom.me/b5050/73/Audi_R8_V10_Coupe_562170_1920x1080.jpg'),
// (null, 'X1', 'BRA2E23', 'BMW', 'X1', 250000, 'https://cdn.motor1.com/images/mgl/J7bMX/s1/2019-bmw-x1.webp'),
// (null, 'Equinox', 'BRA2E24', 'Chevrolet', 'Premier', 220000, 'https://cdn.motor1.com/images/mgl/OqZxB/s1/2018-chevy-equinox-first-drive.webp'),
// (null, 'Mustang', 'BRA2E25', 'Ford', 'Shelby GT500', 1600000, 'https://s1.1zoom.me/b4855/119/Ford_Mustang_Shelby_GT500_2019_Red_Front_Stripes_566439_1920x1080.jpg'),
// (null, 'Civic', 'BRA2E26', 'Honda', 'Touring', 180000, 'https://s1.1zoom.me/b5051/811/Honda_Civic_Type_R_White_530152_1920x1080.jpg'),
// (null, 'Compass', 'BRA2E27', 'JEEP', 'Limited', 200000, 'https://www.autodashboard.com.br/wp-content/uploads/2021/04/jeep-compass-2022-frente-1280x720.jpg'),
// (null, 'GTR Skyline', 'BRA2E28', 'Nissan', 'R35', 800000, 'https://s1.best-wallpaper.net/wallpaper/m/1408/Nissan-GT-R-R35-white-car-front-view_m.webp')`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    NUMERO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    ID_PESSOA INTEGER NOT NULL,
    ID_CARRO INTEGER NOT NULL, 
    FOREIGN KEY(ID_CARRO)
    REFERENCES CARRO(ID),
    FOREIGN KEY(ID_PESSOA) 
    REFERENCES PESSOA(ID)
    )`)
  .then((result) => {
    console.log("Tabela PRODUTO criada com sucesso");
  })
  .catch((erro) => {
    console.log("Tabela PRODUTO com erro de criação");
  });

database(`CREATE TABLE IF NOT EXISTS ENDERECO(
    CODIGO INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,  
    PAIS VARCHAR(45) NOT NULL,
    ESTADO VARCHAR(45) NOT NULL,
    CIDADE VARCHAR (45) NOT NULL,
    CEP CHAR(8) NOT NULL
    )`)
  .then((result) => {
    console.log("Tabela ENDERECO criada com sucesso");
  })
  .catch((erro) => {
    console.log("Tabela ENDERECO com erro de criação");
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
    NOME varchar(30),
    SENHA varchar(10),
    SOBRENOME varchar(30), 
    NASCIMENTO date,
    EMAIL varchar(50),
    FUNCIONARIO BOOLEAN,
    ENDERECO_CODIGO INTERGER,
    FOREIGN KEY (ENDERECO_CODIGO)
    REFERENCES ENDERECO(CODIGO)
    )`)
  .then((result) => {
    console.log("Tabela PESSOA criada com sucesso");
  })
  .catch((erro) => {
    console.log("Tabela PESSOA com erro de criação");
  });

// database(`INSERT INTO PESSOA VALUES
// (null, 'Diego', '123', 'Planinscheck', null, 'dieguinhodobarulho@hotmail.com', true, 1),
// (null, 'João', '321', 'Meireles', null, 'joaozinhogameplays@gmail.com.br', false, 2),
// (null, 'Camilly', 'camis', 'Pessotti', null, 'camillyzada@gmail.com', false, 3),
// (null, 'Bruna', 'brunas', 'Mafra', null, 'bruninha@gmail.com', false, 4),
// (null, 'Henrique', 'henri', 'Cole', null, 'henricole@gmail.com', false, 5),
// (null, 'Vinicius', 'vini12', 'Bonatti', null, 'vinibonatti@gmail.com', false, 6),
// (null, 'Leonardo', 'leo', 'Rafaelli', null, 'leorafaelli@gmail.com', false, 7),
// (null, 'Thiago', 'thiagao12', 'Braga', null, 'thiagobraga@gmail.com', false, 8),
// (null, 'Romário', 'romas', 'Hornburg', null, 'romasdeus@gmail.com', false, 9),
// (null, 'Gustavo', 'gusta', 'Rebelatto', null, 'gustarebelatto@gmail.com', false, 10)`)
//     .then(result => {
//         console.log('Dados cadastrados');
//     }).catch(erro => {
//         console.log('Dados não cadastrados');
//     });

database(`CREATE TABLE IF NOT EXISTS FORNECEDOR(
            CODIGO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, 
            NOME varchar(45) NOT NULL,
            EMAIL varchar(100) NOT NULL,
            TELEFONE CHAR(15) NOT NULL,
            IMAGEM VARCHAR(9999) NOT NULL)`)
  .then((result) => {
    console.log("Tabela FORNECEDOR criada com sucesso");
  })
  .catch((erro) => {
    console.log("Tabela FORNECEDOR com erro de criação");
  });

// database(`INSERT INTO FORNECEDOR VALUES 
// (null, 'Volkswagen', 'volkswagen@gmail.com', '(47) 91234-5678', 'https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo.png'),
// (null, 'Audi', 'audi@gmail.com', '(47) 95678-1234', 'https://w7.pngwing.com/pngs/656/902/png-transparent-audi-car-honda-logo-gt4-european-series-text-trademark-logo.png'),
// (null, 'BMW', 'bmw@gmail.com', '(47) 94321-8765', 'https://logospng.org/download/bmw/logo-bmw-2048.png'),
// (null, 'Chevrolet', 'chevrolet@gmail.com', '(47) 98765-4321', 'https://www.pikpng.com/pngl/m/98-981343_chevrolet-logo-vector-logo-chevrolet-vector-png-clipart.png'),
// (null, 'Ford', 'ford@gmail.com', '(47) 95555-5555', 'https://logodownload.org/wp-content/uploads/2014/02/ford-logo-2.png'),
// (null, 'Honda', 'honda@gmail.com', '(47) 96666-6666', 'https://www.carpointnews.com.br/wp-content/uploads/2016/02/Honda-logo.png'),
// (null, 'Jeep', 'jeep@gmail.com', '(47) 97777-7777', 'https://cdn.worldvectorlogo.com/logos/jeep-3.svg'),
// (null, 'Nissan', 'nissan@gmail.com', '(47) 98888-8888', 'https://logodownload.org/wp-content/uploads/2014/09/nissan-logo-1.png'),
// (null, 'Lamborghini', 'lamborghini@gmail.com', '(47) 99999-9999', 'https://a-static.besthdwallpaper.com/lamborghini-logo-papel-de-parede-2048x1536-85717_26.jpg')`)
//   .then((result) => {
//     console.log("Dados cadastrados");
//   })
//   .catch((erro) => {
//     console.log("Dados não cadastrados");
//   });
