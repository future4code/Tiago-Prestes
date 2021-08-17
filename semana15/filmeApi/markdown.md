### Exercício 1
a) Float: Tudo que não é número inteiro

b)
 SHOW TABLES: mostra as minhas tabelas
 SHOW DATABASES: mostra minhas informações de usuário

c) DESCRIBE: Mostra a descrição de entrada e quais seus tipos.

### Exercício 2
a) Feito

b) Entrada "002" duplicada pela chave 'primária'

c) A contagem de colunas não corresponde à contagem de valores na linha 1

d) Campo de 'nome' não tem valor padrão

e) Valor de data incorreto na linha 1

### Exercício 3
a) SELECT * from Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT * FROM Actor WHERE gender = "tuto"; Não retorna nada, pois não tem nada com o genero invalid.

d) SELECT id, name , salary FROM Actor WHERE salary <= "500000" ;

e) SELECT id, name from Actor WHERE id = "002";

### Exercício 4
a) Seleciona tudo, de Actor com o nome que comece com A até J e salário menor de 300000

b)  SELECT * FROM Actor
    WHERE (name NOT LIKE "A%") AND salary < 300000;

C) SELECT * FROM Actor WHERE (name LIKE "G"  OR  name LIKE "g" ) AND salary < 300000;

d) SELECT * FROM Actor WHERE name NOT LIKE "%G%,"  AND  name  NOT LIKE "%g%"  AND salary > 300000;

### Exercício 5

a) Pode conter uma string de no máximo 65.535bytes

b) 
INSERT INTO Movies
(titulo, sinopse, data_lacamento, avaliacao) 
VALUES 
('Batman: O Cavaleiro das Trevas', 'Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.','2008-07-18', 10);

CREATE TABLE Movies (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento VARCHAR(255) NOT NULL,
    avaliacao FLOAT NOT NULL
);