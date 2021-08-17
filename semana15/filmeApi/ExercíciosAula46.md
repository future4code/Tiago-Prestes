### Exercício 1

a) Apaga a coluna de salario.

b) Muda o nome de gender para sex e deixa com 6 caracteres

c) Muda a quantidade de caracteres para (255)

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2

a) 
UPDATE Actor 
SET name = "Moacyr Franco", birth_date = "1936-10-05" WHERE id = "003"

b) 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005" 

c) 
UPDATE Actor 
SET name = "Francisco Januario",
birth_date = "1910-10-05",
salary = "1,99",
gender = "male"
WHERE id = "005",

d) Ele diz que foi feito o update. Ainda não sei dizer o motivo.

### Exercício 3

a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) 
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)SELECT COUNT(salary) FROM Actor;

### Exercício 5

a) Ele separou os generos em dois grupos e somou a quantidade de cada grupo.

b) 
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercícios 6