SELECT * FROM aluno;

SELEC = FROM aluno WHERE sexo = 'F';

SELECT d.nome AS nome_disciplina, c.nome AS nome_curso FROM disciplina d
INNER JOIN curso c on c.idcurso = d.idcurso

SELECT a.nome AS nome_aluno, c.nome AS nome_curso FROM aluno a  
INNER JOIN alunocurso ac ON ac.idaluno = a.idaluno 
INNER JOIN curso c on c.idcurso = ac.idcurso
WHERE c.idcurso= 1;

SELECT a.nome AS nome_aluno, d.nome AS nome_disciplina FROM aluno a
INNER JOIN disciplina d ON d.iddisciplina = ad.iddisciplina  ad.idddisciplina

