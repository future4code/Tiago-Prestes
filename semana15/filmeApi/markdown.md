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

C) SELECT * FROM Actor WHERE (name NOT LIKE "G"  OR  name  NOT LIKE "g" ) AND salary < 300000;

d) SELECT * FROM Actor WHERE name NOT LIKE "%G%,"  AND  name  NOT LIKE "%g%"  AND salary > 300000;