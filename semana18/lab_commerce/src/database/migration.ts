import connection from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
        CREATE TABLE IF NOT EXISTS User(
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            age INT NULL
        );

        CREATE TABLE IF NOT EXISTS Product(
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(50) NOT NULL,
            price DECIMAL (6,2) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Ticket(
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(50) NOT NULL,
            price VARCHAR(50) NOT NULL,
            origin VARCHAR(50) NOT NULL,
            destination VARCHAR(50) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Purchase(
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            quantity_itens INT,
            total_value DECIMAL(6,2) NOT NULL,
            id_user VARCHAR(50),
            id_product VARCHAR(50),
            FOREIGN KEY(id_user) REFERENCES User(id),
            FOREIGN KEY(id_product) REFERENCES Product(id)
        );

   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
   
   .finally(closeConnection)